import React from 'react';
import './App.css';
import { RouteNav } from './routing/RouteNav';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <RouteNav />
    </MainLayout>
  );
};

export default App;
