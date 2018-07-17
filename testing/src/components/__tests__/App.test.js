import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped

beforeEach(() => {
    wrapped = shallow(<App />)
})

it('shows a comment box', () => {

    /*
    const div = ReactDOM.createElement('div') //Creamos un div para renderizar nuestro componente para comenzar las pruebas

    ReactDOM.render(<App />, div)

    expect(div.innerHTML).toContain('Comment Box')

    ReactDOM.unmountComponentAtNode(div) //Eliminamos el div anteriormente creado para finalizar los test*/

    expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
})