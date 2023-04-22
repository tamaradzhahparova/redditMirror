import React from "react"

interface IItem {
  id: string
  onClick?: (id?: string) => void
  As?: 'a' | 'li' | 'button' | 'div'
  href?: string
  icon?: React.SVGProps<SVGSVGElement>
  text?: string
  className?: string
}

interface IGenericListProps {
  list: IItem[];
}

const noop = () => {
}

export const GenericList = ({list}: IGenericListProps) => {
  return (
    <>
      {list.map(({As = 'li', id, onClick = noop, text, icon, className}) => (
        <As
          onClick={() => onClick(id)}
          key={id}
          className={className}
        >
          {icon}
          {text}
        </As>
      ))}
    </>
  )
}