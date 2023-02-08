import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductsTabs = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/products/new' >Formulario</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/products/all'>Listado</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default ProductsTabs