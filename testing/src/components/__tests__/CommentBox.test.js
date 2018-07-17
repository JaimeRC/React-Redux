import React from 'react'
import CommentBox from 'components/CommentBox'
import { mount } from 'enzyme'

let wrapped

beforeEach(() => {
    wrapped = mount(<CommentBox />)
})

afterEach(()=>{
    wrapped.unmount()
})

it("has a text area and button", () => {

    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)

})