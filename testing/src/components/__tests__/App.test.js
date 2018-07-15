import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('shows a comment box', () =>{

    const div = ReactDOM.create('div') //Creamos un div para renderizar nuestro componente para comenzar las pruebas

    ReactDOM.render(<App />,div)


    ReactDOM.unmountComponentAtNode(div) //Eliminamos el div anteriormente creado para finalizar los test
})