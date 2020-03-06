import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import App from './components/App'

const container = document.getElementById('app')

// ReactDOM.render( <BadgeNew />, container)
ReactDOM.render( <App />, container)





















// --------------- Comentarios -------------------------- 

// const element = document.createElement('h1')
// element.innerText = "Hello Platzi Badges!"

// const container = document.getElementById('app')

// container.appendChild(element)

// siempre que utilicemos JSX en un archivo JS debemos importar React from 'react'
// const jsx = <h1>Hello Platzi Badges!</h1> // JSX
// const element = React.createElement('a', { href: 'http://ismaelteixeira.com.ve'}, 'Ir a mi pagina')

// const element = React.createElement('h1', {}, `Hola!, soy ${name}`)

// const jsxVariable = <h1>Hola! soy { expresiones }</h1>
// const jsxVariable = <h1>Hola! soy {name}</h1>

// const jsxCreateElement = React.createElement(
//     'div', 
//     {}, 
//     React.createElement('h1', {}, 'Soy Ismael'),
//     React.createElement('h1', {}, 'Soy ingeniero frontend')
// )

// como vemos JSX es mucho mas facil, legible y rapido de escribir
// const name = 'Ismael Teixeira'

// const jsx = <div>
//     <h1>Soy {name}</h1>
//     <p>Soy ingeniero frontend.</p>
// </div>
// ReactDOM.render(que queremos renderizar, donde queremos renderizarlo)
