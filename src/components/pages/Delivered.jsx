import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";


const Delivered = () => {

    const [Pending, setPending] = useState([]);

    const pending = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8001/api/delivered');
            setPending(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        pending();
    }, []);
    
    const columns = [
        { field: 'product_name', headerName: 'Product Name', width: 180 },
        { field: 'user_name', headerName: 'User', width: 150 },
        { field: 'price', headerName: 'Price', width: 120, },
        { field: 'qty', headerName: 'Quantity', width: 130 },
        { field: 'Total', headerName: 'Total', width: 120, },
        { field: 'status', headerName: 'Status', width: 150 },
    ];

    const rows = Pending.map(order => ({
        id: order.id,
        product_name: order.product.Product_name,
        user_name: order.user.name,
        price: order.price,
        qty: order.qty,
        Total: parseFloat((order.price * order.qty).toFixed(2)),
        status: order.status,
    }));

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Delivered Orders</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                paginationMode="client"
            />
        </div>
    );
}

export default Delivered