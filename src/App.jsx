import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from 'react';
import { NativeBaseProvider } from "native-base";
import { Loading, Navbar } from "./components";

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ProductList = lazy(() => import('./pages/Products/list'));
const ProductForm= lazy(() => import('./pages/Products/form'));

const breakpoints = {
  small: "599px",
  medium: "768px",
  large: "899px",
}

function App() {
  return (
    <NativeBaseProvider>
      <Router>
        {/* <Navbar
            logoTitle={"Minha Logo"}
            // logoImage={"https://th.bing.com/th/id/OIP.RcPjl1amSOJaS3RGmqcXrAHaCP?rs=1&pid=ImgDetMain"}
            breakpoints={breakpoints}/> */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard breakpoints={breakpoints}/>}/>
            <Route path="/login" element={<Login breakpoints={breakpoints}/>}/>
            <Route path="/products" element={<ProductList breakpoints={breakpoints}/>}/>
            <Route path="/products/:id" element={<ProductForm breakpoints={breakpoints}/>}/>
          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}

export default App;