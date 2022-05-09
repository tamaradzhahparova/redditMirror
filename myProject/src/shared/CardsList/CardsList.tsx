import React, {FC, useEffect, useRef} from 'react';
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

  useEffect(() => {
    dispatch(savePostsData())
  }, [])
  
  console.log(posts.length)
const loadMore = (isIntersecting: boolean) => {
  if (isIntersecting && posts.length > 0) {
    console.log('load more')
    dispatch(savePostsData())
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
  }, [bottomOfList.current, posts])

  return (
    <ul className={styles.CardsList}>
      {isFetching && <div style={{textAlign: 'center'}}>Загрузка...</div>}
      {errorLoading && <div style={{textAlign: 'center'}}>{errorLoading}</div>}
      {!errorLoading && posts.map((post) => <Card key={post.id} post={post}/>)}
      <div ref={bottomOfList} />
    </ul>
  )
};

export default CardsList;
