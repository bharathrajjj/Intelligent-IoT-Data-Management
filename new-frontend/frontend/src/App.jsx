import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'chartjs-adapter-date-fns';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import RegistrationPage from './pages/RegistrationPage';

// import DashboardLearn from './components/DashboardLearn'; //for learning 

import FetchData from './components/FetchData';
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import RegistrationPage from "./pages/RegistrationPage";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>IoT Sensors Dashboard</h1>
        <h3>Time-series Sensor Data and Correlation Analysis</h3>
        <Routes>
          
          
          <Route path="/sensorData1" element={<FetchData />} /> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/dashboard/:id" element={<DashboardPage />} />
          <Route path="/register" element={<RegistrationPage />} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layout>
                <HomePage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <DashboardPage />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;