import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
// import {router} from './routes/Routes';
import './index.css'
import router from './routes/routes';
import AuthProvider from '../AuthProvider/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
