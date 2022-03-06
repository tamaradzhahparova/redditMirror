import React from "react"

interface IItem {
  id: string
  onClick: (id: string) => void
  As?: 'a' | 'li' | 'button' | 'div'
  href?: string
}

interface IGenericListProps {
  list: IItem[];
}

export const GenericList = ({list}: IGenericListProps) => {
  return (
    <>
      {list.map(({As = 'li', id, onClick}) => (
        <As
          onClick={() => onClick(id)}
          key={id}
        >
        </As>
      ))}
    </>
  )
}