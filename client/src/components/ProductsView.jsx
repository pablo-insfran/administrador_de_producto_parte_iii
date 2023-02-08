import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios'

const ProductsView = () => {

    const [products, setProducts] = useState({})
    //Obtener Id
    const { id } = useParams()

    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/view/${id}`)
            .then((result) => {
                console.log("ProductsView", result.data.result)
                setProducts(result.data.result)
            })
            .catch((error) => { console.log("Algo salió mal - ProductsView", error) })
    }, [])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8080/api/products/delete/${id}`)
            .then((result) => {
                console.log("ProductsDelete", result.data.result)
                navigate('/products/all')
            })
            .catch((error) => { console.log("Algo salió mal - ProductsDelete", error) })
    }

    return (
        <div className="container-fluid" >
            <h2>{products.title}</h2>
            <h3>Price: {products.price}</h3>
            <h3>Description: {products.description}</h3>
            <div className="container-md">
                <Link to={`/products/edit/${id}`} className="btn btn-warning">Editar</Link>
                <button type="button" className="btn btn-danger" onClick={deleteProduct}>Eliminar</button>
            </div>
        </div>
    )
}

export default ProductsView