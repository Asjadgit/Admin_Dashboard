import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8001/api/AllOrders');
            setOrders(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOrders();
    }, []);


    const columns = [
        { field: 'product_name', headerName: 'Product Name', width: 180 },
        { field: 'user_name', headerName: 'User', width: 150 },
        { field: 'price', headerName: 'Price', width: 120, },
        { field: 'qty', headerName: 'Quantity', width: 130 },
        { field: 'Total', headerName: 'Total', width: 120, },
        { field: 'status', headerName: 'Status', width: 150 },
    ];

    const rows = orders.map(order => ({
        id: order.id,
        product_name: order.product.Product_name,
        user_name: order.user.name,
        price: order.price,
        qty: order.qty,
        Total: (order.price * order.qty),
        status: order.status,
    }));

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>All Orders</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                pagination
                rowsPerPageOptions={[10, 25, 50]}
                paginationMode="client"
            />
        </div>
    );
};

export default AllOrders;
