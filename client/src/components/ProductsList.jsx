import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'



const ProductsList = () => {

    const [listproducts, setListproducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products/all')
            .then((result) => {
                console.log("ProductsList", result.data.result)
                setListproducts(result.data.result)
            })
            .catch((error) => { console.log("Algo salió mal- ProductsList -", error) })
    }, [])


    return (
        <>
            <div className="container-fluid">
                <h2 className='mt-5'>All Products:</h2>
                <div className="list-group">
                    <ul className="list-group">
                        {listproducts.map((products) => (
                            <div key={products._id} >
                                <Link to={`/products/view/${products._id}`}>
                                    <li className="list-group-item">{products.title}</li>
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default ProductsList