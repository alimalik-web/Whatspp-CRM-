
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Campaigns } from './pages/Campaigns';
import { Automation } from './pages/Automation';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/contacts" element={<div className="p-8 bg-white rounded-2xl border border-slate-200 text-center text-slate-500">Contact Management (CSV Upload, CRM Sync) coming soon.</div>} />
          <Route path="/templates" element={<div className="p-8 bg-white rounded-2xl border border-slate-200 text-center text-slate-500">Official Meta Templates Sync coming soon.</div>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
