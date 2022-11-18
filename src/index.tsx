import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/global.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
const App = lazy(()=> import ('./App'))
const Header =lazy(() => import('./views/static/header/Header'))


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>
);
