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
import { getDatabase } from 'firebase/database';
import { authLogout } from './utils/auth';
import db from "./data/db";

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ProductList = lazy(() => import('./pages/Products/list'));
const ProductForm= lazy(() => import('./pages/Products/form'));
const Setup = lazy(() => import('./pages/Setup'));

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
  databaseURL: "https://mobile-first-708ca-default-rtdb.firebaseio.com",
  appId: "1:195492127813:web:b470cfdd4e7aba3a8b2f2c"
};

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);
  const [route, setRoute] = useState("/");

  return (
    <NativeBaseProvider>
      <Router>
        {
          route === "/login" || route === "/setup" ? null : <Navbar
                                        logout={() => authLogout(auth)}
                                        logoTitle={"Minha Logo"}
                                        breakpoints={breakpoints}/>
        }
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard setRoute={setRoute} breakpoints={breakpoints} auth={auth} database={database}/>}/>
            <Route path="/setup" element={<Setup setRoute={setRoute} breakpoints={breakpoints} auth={auth} database={database}/>}/>
            <Route path="/login" element={<Login setRoute={setRoute} breakpoints={breakpoints} auth={auth} database={database}/>}/>
            <Route path="/products" element={<ProductList setRoute={setRoute} breakpoints={breakpoints} auth={auth} database={database}/>}/>
            <Route path="/products/:id" element={<ProductForm setRoute={setRoute} breakpoints={breakpoints} auth={auth} database={database}/>}/>
          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}

export default App;