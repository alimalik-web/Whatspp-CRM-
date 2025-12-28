
import React from 'react';

export const Automation: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-900">Automation Flows</h2>
        <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700">
          Create New Flow
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { trigger: 'Keyword: "Price"', action: 'Send Catalog Template', active: true },
          { trigger: 'User Joins Group', action: 'Send Welcome Flow', active: true },
          { trigger: 'Out of Hours', action: 'Send Away Message', active: false },
          { trigger: 'Button Click: "Support"', action: 'Assign to Agent', active: true },
        ].map((flow, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={flow.active} readOnly />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <h3 className="font-bold text-lg mb-1">{flow.trigger}</h3>
            <p className="text-slate-500 text-sm mb-4">Action: {flow.action}</p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Last triggered 2h ago</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 text-white">
        <div className="max-w-xl">
          <h3 className="text-2xl font-bold mb-4">Need complex AI Logic?</h3>
          <p className="text-slate-300 mb-6">Integrate your automation flows directly with Gemini AI to handle complex customer queries, interpret images, or even voice notes in real-time.</p>
          <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
            Setup AI Chatbot
          </button>
        </div>
      </div>
    </div>
  );
};
