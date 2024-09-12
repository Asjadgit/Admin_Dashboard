import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SalesChart from '../UI/SalesChart';
import './Home.css';

const Home = () => {
    const [totalSales, setTotalSales] = useState(0);
    const [weeklySales, setWeeklySales] = useState(0);
    const [monthlySales, setMonthlySales] = useState(0);
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const totalSalesRes = await axios.get('http://127.0.0.1:8001/api/total-sales');
                const totalCustomersRes = await axios.get('http://127.0.0.1:8001/api/total-customer');
                const weeklySalesRes = await axios.get('http://127.0.0.1:8001/api/weekly-sales');
                const monthlySalesRes = await axios.get('http://127.0.0.1:8001/api/monthly-sales');

                setTotalSales(totalSalesRes.data.totalSales);
                setTotalCustomers(totalCustomersRes.data.customers);
                setWeeklySales(weeklySalesRes.data.weeklySales);
                setMonthlySales(monthlySalesRes.data.monthlySales);

                // Example data for Recharts
                setSalesData([
                    { name: 'Jan', sales: 4000, profit: 2400 },
                    { name: 'Feb', sales: 3000, profit: 1398 },
                    { name: 'Mar', sales: 2000, profit: 9800 },
                    { name: 'Apr', sales: 2780, profit: 3908 },
                    { name: 'May', sales: 1890, profit: 4800 },
                    { name: 'Jun', sales: 2390, profit: 3800 },
                    { name: 'Jul', sales: 3490, profit: 4300 },
                ]);
            } catch (error) {
                console.error('Error fetching statistics:', error);
            }
        };

        fetchStatistics();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div className="overview-container">
                <div className="overview-card">
                    <h3>Total Sales</h3>
                    <p>${parseFloat((totalSales ?? 0).toFixed(2))}</p>
                </div>
                <div className="overview-card">
                    <h3>This Week Sales</h3>
                    <p>${parseFloat((weeklySales ?? 0).toFixed(2))}</p>
                </div>
                <div className="overview-card">
                    <h3>This Month Sales</h3>
                    <p>${parseFloat((monthlySales ?? 0).toFixed(2))}</p>
                </div>
                <div className="overview-card">
                    <h3>Total Customers</h3>
                    <p>{parseFloat((totalCustomers ?? 0).toFixed(0))}</p>
                </div>
            </div>

            {/* Add the SalesChart Component here */}
            <div className="chart-container">
                <SalesChart data={salesData} />
            </div>
        </div>
    );
};

export default Home;
