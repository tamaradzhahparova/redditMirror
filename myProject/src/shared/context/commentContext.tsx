import React from "react";


interface IComment {
 value: string
  setValue: (value: string) => void
}

export const commentContext = React.createContext<IComment>({
  value: '',
  setValue: () => {}
})
