import React, { FC, useEffect, useState} from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
  button: React.ReactNode
  children: React.ReactNode
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

const noop = () => {
}

const Dropdown: FC<DropdownProps> = ({button, children, onOpen = noop, isOpen, onClose = noop}) => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])
  
  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }
  
  
  return (
    <div className={styles.Dropdown}>
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
