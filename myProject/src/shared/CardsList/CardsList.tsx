import React, {FC, useEffect, useRef, useState} from 'react';
import Card from './Card/Card';
import styles from './CardsList.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {savePostsData} from "../../redux/postsSlice";
import Login from "./Login";

interface CardsListProps {
}

const CardsList: FC<CardsListProps> = () => {
  const isAuthorized = useAppSelector(state => state.meSlice.isAuthorize)
  const meIsFetching = useAppSelector(state => state.meSlice.isFetching)
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
  
  return <>
    {isAuthorized && <ul className={styles.CardsList}>
      {errorLoading && <div style={{textAlign: 'center'}}>{errorLoading}</div>}
      {!errorLoading && posts.map((post) => <Card key={post.id} post={post}/>)}
      <div ref={bottomOfList}/>
      {isThirdLoad && !isFetching && <div className={styles.loadMoreWrapper}>
          <button onClick={handleClick} className={styles.loadMoreButton}>Load More</button>
      </div>}
      {isFetching && <div style={{textAlign: 'center'}}>Загрузка...</div>}
    </ul>}
    {!isAuthorized && !meIsFetching && <Login />}
  </>
  
  
};

export default CardsList;
