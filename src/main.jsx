import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import  ProductProvider  from "./Context/ProductContext";
import Footer from './Components/Footer/Footer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
      
        <App />
        <Footer/>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
