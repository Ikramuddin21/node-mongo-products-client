import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // handle delete
    const handleDeleteProduct = id => {
        const confarmation = window.confirm('Are you sure, delete product');
        if (confarmation) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted Product');
                        const remainingPd = products.filter(pd => pd._id !== id);
                        setProducts(remainingPd);
                    }
                })
        }
    };

    return (
        <div>
            <h2>Available Products: {products.length}</h2>
            <ul>
                {
                    products.map(product => <li
                        key={product._id}
                    >
                        <u>Name:</u> {product.pdName},
                        <u> Price:</u> {product.pdPrice},
                        <u> Quantity:</u> {product.pdQuantity}
                        <Link to={`/product/update/${product._id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default ManageProducts;