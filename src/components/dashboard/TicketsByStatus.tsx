
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Open', value: 42, color: '#9b87f5' },
  { name: 'In Progress', value: 28, color: '#4c1d95' },
  { name: 'Pending', value: 15, color: '#c4b5fd' },
  { name: 'Closed', value: 65, color: '#6e59a5' },
];

const TicketsByStatus = () => {
  return (
    <Card className="col-span-1 md:col-span-2 h-[400px]">
      <CardHeader>
        <CardTitle>Tickets by Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value} tickets`, 'Count']} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TicketsByStatus;
