import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './Dropdown.module.css';
import {IOffset} from "../CardsList/Card/Card";

interface DropdownProps {
  button: React.ReactNode
  children: React.ReactNode
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
  setOffsetCallback: (value: IOffset) => void
}

const Dropdown: FC<DropdownProps> = ({button, children, setOffsetCallback, isOpen}) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  const ref = useRef<HTMLDivElement>(null)

  const handleOpen = (e: any) => {
    const {top} = document.body.getBoundingClientRect()
    const {x, y} = e.target.getBoundingClientRect()
    setOffsetCallback({x: x - 20, y: -top + y + 50})
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (e.target instanceof Node && !ref.current?.contains(e.target))
        setIsDropdownOpen(false)
    }
    document.addEventListener('click', handleClose)
    return () => {
      document.removeEventListener('click', handleClose)
    }
  }, [])


  return (
    <div className={styles.Dropdown} ref={ref}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div
            onClick={() => setIsDropdownOpen(false)}
            className={styles.list}>
            {children}
          </div>
        </div>
      )}
    </div>)
};

export default Dropdown;
