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

  console.log('!!')


  useEffect(() => {
    console.log('hook')
    const observer = new IntersectionObserver(() => {
      console.log('load more')
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
  }, [bottomOfList.current])

  return (
    <ul className={styles.CardsList}>
      {isFetching && <div style={{textAlign: 'center'}}>Загрузка...</div>}
      {errorLoading && <div style={{textAlign: 'center'}}>{errorLoading}</div>}
      {!isFetching && !errorLoading && <>
        {posts.map((post) => <Card key={post.id} post={post}/>)}
        {posts.length > 0 && <div ref={bottomOfList}>bottom</div>}
      </>}
    </ul>
  )
};

export default CardsList;
