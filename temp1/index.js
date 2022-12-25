import React from 'react'
import ReactDOM from 'react-dom'

function Hello(){
    return (
        <h1>Hello, World!</h1>
    )
}

const el = <Hello />
ReactDOM.render(el, document.getElementById('root'))