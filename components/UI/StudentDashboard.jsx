import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const StudentDashboard = () => {
    const { user, research } = useSelector(state => state.user);
    const pending = research?.filter(singleResearch => singleResearch.status === 'pending').length;
    const approved = research?.filter(singleResearch => singleResearch.status === 'approved').length;
    const rejected = research?.filter(singleResearch => singleResearch.status === 'rejected').length;
    const data = [
        { name: "Group A", value: pending },
        { name: "Group B", value: approved },
        { name: "Group C", value: rejected }
    ];

    const COLORS = ["#3B82F6", "#22C55E", "#EF4444"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (

        <>
            <div className="mt-3">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>

                <div className="legend_of_chart flex flex-col gap-3 text-black font-extrabold">
                    <div className='flex gap-3 items-center'>
                        <div className="w-5 h-5 rounded-full bg-blue-500"></div> <div>
                            Pending - {pending}
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className="w-5 h-5 rounded-full bg-green-500"></div> <div>
                            Approved - {approved}
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className="w-5 h-5 rounded-full bg-red-500"></div> <div>
                            Rejected - {rejected}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;