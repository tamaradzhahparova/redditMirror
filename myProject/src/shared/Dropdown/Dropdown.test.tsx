import {shallow} from "enzyme";
import React from "react";
import Dropdown from "./Dropdown";

describe('dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown button={<button/>} children={<div/>}/>)
    expect(wrapper).toBeDefined()
    expect(wrapper.find('div.Dropdown').isEmptyRender()).toBeFalsy()
  })

  test('should render (snapshoot)', () => {
    const wrapper = shallow(<Dropdown button={<button/>} children={<div/>}/>)
    expect(wrapper).toMatchSnapshot()
  })
})