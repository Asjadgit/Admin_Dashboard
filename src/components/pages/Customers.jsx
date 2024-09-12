import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";


const Customers = () => {

    const [Customers, setCustomers] = useState([]);

    const customers = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8001/api/Customers');
            setCustomers(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        customers();
    }, []);
    
    const columns = [
        { field: 'name', headerName: 'User Name', width: 150 },
        { field: 'email', headerName: 'User Email', width: 180 },,
    ];

    const rows = Customers.map(customer => ({
        id: customer.id,
        name: customer.name,
        email: customer.email
    }));

    return (
        <div style={{ height: 400, width: '50%' }}>
            <h1>All Customers</h1>
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

export default Customers