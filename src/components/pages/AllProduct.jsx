import axios from "axios";
import React, { useEffect, useState } from "react";
import './AllProduct.css';


const AllProducts = () => {
    const [products,setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8001/api/AllProducts');
            // console.log(response.data.data);
            setProducts(response.data.data);
        }catch (error) {
        console.log(error);
        }
    };
    
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="product-container">
            <div className="products">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image">
                            <img src={`http://127.0.0.1:8001/storage/${product.Image}`} alt={product.Product_name} />
                        </div>
                        <div className="product-info">
                            <p className="product-name">{product.Product_name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllProducts