import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const ProductsEdit = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    //Obtener Id
    const { id } = useParams()

    const navigate = useNavigate()

    //Mostrar Datos del Producto
    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/view/${id}`)
            .then((result) => {
                console.log("ProductsView", result.data.result)
                setTitle(result.data.result.title)
                setPrice(result.data.result.price)
                setDescription(result.data.result.description)
            })
            .catch((error) => { console.log("Algo salió mal - ProductsView", error) })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8080/api/products/edit/${id}`, {
            title,
            price,
            description
        })
            .then((result) => {
                console.log("ProductsEdit", result)
                navigate(`/products/view/${id}`)
            })
            .catch((error) => { console.log("Algo salió mal - ProductsEdit", error) })
    }

    return (
        <>
            <div className="container-fluid"  >
                <div><h2>Edit Product</h2></div>
                <form onSubmit={submitHandler}>
                    <div className="mb-3 ">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                        <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            </div>
        </>
    )
}

export default ProductsEdit