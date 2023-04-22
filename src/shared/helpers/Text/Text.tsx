import React, {ReactNode} from "react";
import styles from './Text.module.css'
import classNames from 'classnames'

type TSizes = 28 | 20 | 16 | 14 | 12 | 10

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  grayF3 = 'grayF3',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  gray66 = 'gray66',
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div'
  children?: ReactNode
  size: TSizes
  mobileSize?: TSizes
  tabletSize?: TSizes
  desktopSize?: TSizes
  color?: EColor
}

export const Text = (props: ITextProps) => {
  const {As = 'span', color = EColor.black, children, size, mobileSize, tabletSize, desktopSize} = props
  const classes = classNames(
    styles[`s${size}`],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
    styles[color]
  )
  return (
    <As className={classes}>
      {children}
    </As>
  )
}