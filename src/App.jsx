import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { lazy, Suspense, useState } from 'react';
import { NativeBaseProvider } from "native-base";
import { Loading, Navbar } from "./components";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { authLogout } from './utils/auth';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ProductList = lazy(() => import('./pages/Products/list'));
const ProductForm= lazy(() => import('./pages/Products/form'));

const breakpoints = {
  small: "599px",
  medium: "768px",
  large: "899px",
}

const firebaseConfig = {
  apiKey: "AIzaSyDmGNWw3nBDu5X6sU9vU0wXJo-LU_9m32Y",
  authDomain: "mobile-first-708ca.firebaseapp.com",
  projectId: "mobile-first-708ca",
  storageBucket: "mobile-first-708ca.appspot.com",
  messagingSenderId: "195492127813",
  appId: "1:195492127813:web:b470cfdd4e7aba3a8b2f2c"
};

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  // TODO: Dinamizar esse cara
  const [route, setRoute] = useState("/login"); 

  return (
    <NativeBaseProvider>
      <Router>
        {
          route === "/login" ? null : <Navbar
                                        logout={() => authLogout(auth)}
                                        logoTitle={"Minha Logo"}
                                        breakpoints={breakpoints}/>
        }
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard breakpoints={breakpoints} auth={auth}/>}/>
            <Route path="/login" element={<Login breakpoints={breakpoints} auth={auth}/>}/>
            <Route path="/products" element={<ProductList breakpoints={breakpoints} auth={auth}/>}/>
            <Route path="/products/:id" element={<ProductForm breakpoints={breakpoints} auth={auth}/>}/>
          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}

export default App;