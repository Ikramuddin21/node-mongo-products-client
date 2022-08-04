import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProducts = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    // handle name
    const handlePdNameChange = e => {
        const name = e.target.value;
        const newProduct = {...product};
        newProduct.pdName = name;
        setProduct(newProduct);
    };

    // handle price 
    const handlePdPriceChange = e => {
        const price = e.target.value;
        const newProduct = {pdName: product.pdName, pdPrice: price, pdQuantity: product.pdQuantity};
        setProduct(newProduct);
    };

    // handle quantity
    const handlePdQuantityChange = e => {
        const quantity = e.target.value;
        const newProduct = {...product};
        newProduct.pdQuantity = quantity;
        setProduct(newProduct);
    };

    // handle update
    const handleUpdateProduct = e => {
        e.preventDefault();

        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                alert('Successfully Update Product');
                setProduct({});
            }
        })
    };

    return (
        <div>
            <h2>Update Products</h2>
            <h3>{product.pdName}, {product.pdPrice}, {product.pdQuantity}</h3>
            <form onSubmit={handleUpdateProduct}>
                <input type="text" onChange={handlePdNameChange} value={product.pdName || ""} />
                <input type="number" onChange={handlePdPriceChange} value={product.pdPrice || ""} />
                <input type="number" onChange={handlePdQuantityChange} value={product.pdQuantity || ""} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProducts;