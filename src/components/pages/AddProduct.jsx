import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
    // State to store form data
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState(null);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Create a FormData object to send the form data, including the image file
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('image', productImage);

        try {
            // Make an Axios POST request to your Laravel API
            const response = await axios.post('http://127.0.0.1:8001/api/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the correct content type for file upload
                },
            });

            // Handle the response as needed
            console.log('Product added successfully:');
            console.log(product);

            // Reset form fields after submission
            setProductName('');
            setProductImage(null);
        } catch (error) {
            // Handle errors as needed
            console.error('Error adding product:', error.response ? error.response.data : error.message);
        }
    };

    const newProduct = { 
        width: '100%',
        // backgroundColor: '#999',
        marginRight: 10,
        padding:0,
    };

    // Inline styles
    const formStyle = {
        maxWidth: '700px',
        maxHeight: '500px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '3px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        padding: '10px 15px',
        borderRadius: '3px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    };

    const labelStyle = {
        fontWeight: 'bold',
        marginBottom: '5px',
        display: 'block',
    };

    return (
        <div style={newProduct}>
            <h1 style={{ textAlign: 'center' }}>Add New Product</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                {/* Name Input */}
                <div>
                    <label htmlFor="name" style={labelStyle}>Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>

                {/* Image Input */}
                <div>
                    <label htmlFor="image" style={labelStyle}>Product Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setProductImage(e.target.files[0])}
                        required
                        style={inputStyle}
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" style={buttonStyle}>Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
