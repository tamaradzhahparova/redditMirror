import React, {FC, useEffect, useRef, useState} from 'react';
import Card from './Card/Card';
import styles from './CardsList.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {savePostsData} from "../../redux/postsSlice";

interface CardsListProps {
}

const CardsList: FC<CardsListProps> = () => {
  const isFetching = useAppSelector(state => state.postsSlice.isFetching)
  const errorLoading = useAppSelector(state => state.postsSlice.errorLoading)
  const posts = useAppSelector(state => state.postsSlice.posts)
  const bottomOfList = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const [page, setPage] = useState(1)
  const isThirdLoad = page % 3 === 0
  
 const handleClick = () => {
   setPage(prevState => prevState + 1)
 }
 
  const loadMore = (isIntersecting: boolean) => {
    if (isIntersecting && posts.length > 0 && !isThirdLoad && !isFetching) {
      console.log('in observe dispatch')
      dispatch(savePostsData())
      setPage(prevState => prevState + 1)
    }
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      loadMore(entries[0].isIntersecting)
    }, {
      rootMargin: '100px'
    })
    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current, posts, page, isFetching])
  
  return (
    <ul className={styles.CardsList}>
     
      {errorLoading && <div style={{textAlign: 'center'}}>{errorLoading}</div>}
      {!errorLoading && posts.map((post) => <Card key={post.id} post={post}/>)}
      <div ref={bottomOfList}/>
      {isThirdLoad && !isFetching && <div className={styles.loadMoreWrapper}>
          <button onClick={handleClick} className={styles.loadMoreButton}>Load More</button>
      </div>}
      {isFetching && <div style={{textAlign: 'center'}}>Загрузка...</div>}
    </ul>
  )
};

export default CardsList;
