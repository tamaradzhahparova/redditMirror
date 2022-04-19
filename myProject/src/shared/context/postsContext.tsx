import React from "react";
import {usePostsData} from "../../hooks/usePostsData";


// export interface IUserContextData {
//   name?: string
//   iconImg?: string
// }

export const postsContext = React.createContext([])

export function PostsContextProvider({children}: {children: React.ReactNode}) {
  const [data] = usePostsData()
  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  )
}

//to-do - add typing