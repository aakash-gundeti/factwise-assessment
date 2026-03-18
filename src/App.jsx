import { AllCommunityModule } from 'ag-grid-community';
import { AgGridProvider } from 'ag-grid-react';

import DashboardContent from './components/DashboardConent';
import DashboardLayout from './components/DashboardLayout';
import './index.css';

const modules = [AllCommunityModule];

function App() {
  return (
    <>
      <AgGridProvider modules={modules}>
        <DashboardLayout>
          <DashboardContent />
        </DashboardLayout>
      </AgGridProvider>
    </>
  )
}

export default App
