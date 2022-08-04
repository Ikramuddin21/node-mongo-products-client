import React, { useRef } from 'react';

const AddProducts = () => {

    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    // handle add product
    const handleAddProduct = e => {
        e.preventDefault();

        const pdName = nameRef.current.value;
        const pdPrice = priceRef.current.value;
        const pdQuantity = quantityRef.current.value;
        const product = {pdName, pdPrice, pdQuantity};

        fetch('http://localhost:5000/products', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>  {
            if(data.acknowledged) {
                alert('Successfully Product added');
                e.target.reset();
            }
        })
    };

    return (
        <div>
            <h2>Add Products</h2>
            <form onSubmit={handleAddProduct}>
                <input type="text" ref={nameRef} placeholder="Product Name" />
                <input type="number" ref={priceRef} placeholder="Price" />
                <input type="number" ref={quantityRef} placeholder="Quantity" />
                <input type="submit" value="Added" />
            </form>
        </div>
    );
};

export default AddProducts;