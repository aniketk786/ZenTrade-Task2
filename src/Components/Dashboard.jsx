import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Sales Dashboard</h2>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;
