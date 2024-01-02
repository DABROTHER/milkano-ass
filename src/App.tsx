import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/routes';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {ROUTES?.map(({ path, Element }, i) =>
          <Route key={i} path={path} element={<Element />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
