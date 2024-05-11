import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from 'react';
import { NativeBaseProvider } from "native-base";
import {Loading, Navbar} from "./components";

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ProductList = lazy(() => import('./pages/Products/list'));
const ProductForm= lazy(() => import('./pages/Products/form'));

const breakpoints = {
  small: "576px"
}

function App() {
  return (
    <NativeBaseProvider>
      <Router>
        <Navbar
            logoTitle={"Minha Logo"}
            // logoImage={"https://th.bing.com/th/id/OIP.RcPjl1amSOJaS3RGmqcXrAHaCP?rs=1&pid=ImgDetMain"}
            breakpoints={breakpoints}/>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/products/:id" element={<ProductForm/>}/>
          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}

export default App;