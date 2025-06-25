import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import { LearningModules } from '@/features/module-list/module-list';
import { ModuleContainer } from '@/features/module-list/components/module-container/module-container';
import { Navbar } from '@components/navbar/navbar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LearningModules />} />
        <Route path="module/day/:id" element={<ModuleContainer />} />
        <Route path="module/week/:id" element={<ModuleContainer />} />
        <Route path="module/month/:id" element={<ModuleContainer />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
