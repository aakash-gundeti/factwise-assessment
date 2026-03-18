import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useMemo, useState } from 'react';

const getAverage = ((data, key) => {
  if (!data || data.length === 0) return 0;
  const sum = data.reduce((acc, item) => acc + (item[key] || 0), 0)
  return (sum / data.length).toFixed(2);
})

const StatCard = ({ title, value }) => (
  <div className="bg-white p-5 rounded-lg shadow-md">
    <p className="text-sm font-medium text-gray-500">{title}</p>
    <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

const DashboardContent = () => {
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([]);

  const stats = useMemo(() => ({
    avgAge:    getAverage(rowData, 'age'),
    avgSalary: getAverage(rowData, 'salary'),
    avgRating: getAverage(rowData, 'performanceRating'),
  }), [rowData]);

  useEffect(() => {
    fetch('/assessment_data.txt')
    .then(res => res.text())
    .then(text => {
      const data = JSON.parse(text);
      setRowData(data.employees);

      const columns = Object.keys(data.employees[0]).map(key => ({
        field: key,
      }));

      setColDefs(columns);
    });
  },[])

  const paginationPageSizeSelector = useMemo(() => {
    return [5, 10, 15, 20]
  });
  
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Users" value={rowData.length} />
        <StatCard title="Avg. Age" value={stats.avgAge} />
        <StatCard title="Avg. Salary" value={stats.avgSalary} />
        <StatCard title="Avg. Performance Rating" value={stats.avgRating} />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Employees table</h3>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          domLayout="autoHeight"
          pagination={true}
          paginationPageSize={5}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </>
  );
};

export default DashboardContent;
