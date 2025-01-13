import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.tsx';
import './index.css';
import Home from './routes/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Careers from './routes/Careers/index.tsx';

AOS.init();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/careers',
    element: <Careers />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
