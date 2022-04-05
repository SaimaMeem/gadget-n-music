import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Tooltip, AreaChart, XAxis, YAxis, CartesianGrid, Area, Legend, Bar, BarChart, Line, LineChart, PieChart, Pie } from 'recharts';
const data = [
    {
        "month": "Mar",
        "investment": 30000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 20000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 100000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 90000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 60000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 80000,
        "sell": 670,
        "revenue": 61000
    }
]
const Dashboard = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col className='area-chart my-3'>
                    <AreaChart width={500} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend/>
                        <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorInvestment)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorRevenue)" />
                    </AreaChart>
                </Col>
                <Col className='bar-chart my-3'>
                    <BarChart width={500} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </Col>
            </Row>
            <Row>
                <Col className='line-chart my-3'>
                    <LineChart width={500} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>
                </Col>
                <Col className='pie-chart my-3'>
                    <PieChart width={500} height={250}>
                        <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Tooltip/>
                    </PieChart>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;