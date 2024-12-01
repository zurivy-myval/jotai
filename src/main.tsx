import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SimpleCounter from './components/SimpleCounter.tsx';
import UserInfo from './components/UserInfo.tsx';
import Cart from './components/Cart.tsx';
import { Provider } from 'jotai';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', element: <SimpleCounter />},
  {path: '/userinfo', element: <UserInfo />},
  {path: '/cart', element: <Cart />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
     <RouterProvider router={router}/> 
    </Provider>
  </StrictMode>,
)
