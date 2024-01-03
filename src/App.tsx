import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/routes';
import Header from './components/design-systems/Organisms/Header';
import DropCard from './components/design-systems/Molecules/DropCard';
import { STORE_MANAGEMENT } from './components/design-systems/Templates/DemandDashboard/utils';
import DropdownDatePicker from './components/design-systems/Molecules/DatePicker';
import { useState } from 'react';
import Typography from './components/design-systems/Atoms/Typography';

const AppRoutes = () => {
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <Router>
      <div className="bg-[#F5F6FA] container">
        <Header />
        <div className="flex flex-row">
          <div className="bg-[#fff] pb-8 mt-4">

            <DropCard ROUTES={ROUTES} title="Store Management" drop={STORE_MANAGEMENT} />
          </div>
          <div className="bg-[#fff] w-full flex flex-col py-4 my-4 ml-4 rounded-t-[5px]">

            <div className='flex gap-[613px] mb-12 flex-row mx-3'>
              <Typography className='!text-[27.891px] !font-semibold font-roboto text-neutral-950 w-auto'>Product Demand</Typography>
              <DropdownDatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
            </div>
            <Routes>
              {ROUTES?.map(({ path, Element }, i) =>
                <Route key={i} path={path} element={<Element />} />
              )}
            </Routes>
          </div>
        </div>

      </div>
    </Router>
  );
};

export default AppRoutes;
