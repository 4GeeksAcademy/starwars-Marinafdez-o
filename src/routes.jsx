import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import People from './pages/people.jsx';
import PersonDetail from './pages/PersonDetail.jsx';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/people', element: <People /> },
  { path: '/people/:id', element: <PersonDetail /> }
]);
