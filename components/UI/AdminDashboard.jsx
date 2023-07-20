import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
    const { allUser,conferences } = useSelector(state => state.user);
    

    const admin = allUser?.filter(singleUser => singleUser.role === 'admin').length;
    const faculty = allUser?.filter(singleUser => singleUser.role === 'faculty').length;
    const student = allUser?.filter(singleUser => singleUser.role === 'student').length;

    

    const data1 = [
        { name: 'A', value: admin },
        { name: 'B', value: faculty },
        { name: 'C', value: student }
    ];


    // const data2 = [
    //     { name: 'X', value: assigned },
    //     { name: 'Y', value: (total - assigned) }
    // ];

    const COLORS = ['#3B82F6', '#22C55E', '#EF4444'];
    // const COLORS2 = ['#8884d8', '#82ca9d'];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data1}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                                const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                                return (
                                    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                                        {`${(percent * 100).toFixed(0)}%`}
                                    </text>
                                );
                            }}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data1.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                {/* <div>
                    <ResponsiveContainer width="100%" height={500}>
                        <PieChart>
                            <Pie
                                data={data2}
                                cx={200}
                                cy={200}
                                labelLine={false}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                                    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                                    return (
                                        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                                            {`${(percent * 100).toFixed(0)}%`}
                                        </text>
                                    );
                                }}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data2.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS.length]} />
                                ))}
                                
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div> */}
            </div>
        </>
    );
};

export default AdminDashboard;