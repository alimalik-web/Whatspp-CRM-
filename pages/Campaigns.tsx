
import React, { useState } from 'react';
import { generateCampaignContent } from '../services/geminiService';
import { CampaignStatus } from '../types';

export const Campaigns: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);
  const [objective, setObjective] = useState('');
  const [audience, setAudience] = useState('');
  const [generatedTemplate, setGeneratedTemplate] = useState<any>(null);

  const handleGenerateAI = async () => {
    if (!objective || !audience) return;
    setLoadingAI(true);
    const content = await generateCampaignContent(objective, audience);
    setGeneratedTemplate(content);
    setLoadingAI(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-900">Bulk Campaigns</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          <span>New Campaign</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Campaign Name</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Progress</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Stats (D/R)</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900">Meta Promo Q{i}</div>
                  <div className="text-xs text-slate-500">Created on Oct {i}, 2023</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${i % 2 === 0 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {i % 2 === 0 ? 'Completed' : 'Sending'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-32">
                    <div className="flex justify-between text-[10px] mb-1">
                      <span>{i * 20}%</span>
                      <span>100,000</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full" style={{ width: `${i * 20}%` }}></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <span className="text-green-600">{(i * 15).toFixed(1)}k</span> / <span className="text-blue-600">{(i * 10).toFixed(1)}k</span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Campaign Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900 bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Launch AI-Powered Campaign</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Campaign Objective</label>
                  <textarea 
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="e.g. Promote our 20% off summer sale for premium subscribers"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none h-24"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Target Audience</label>
                  <input 
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    placeholder="e.g. Existing customers who haven't bought in 3 months"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
                
                <button 
                  onClick={handleGenerateAI}
                  disabled={loadingAI || !objective || !audience}
                  className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-black transition-colors flex items-center justify-center space-x-2 disabled:bg-slate-400"
                >
                  {loadingAI ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.95a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707zM16 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1z" /></svg>
                      <span>Draft with Gemini AI</span>
                    </>
                  )}
                </button>

                {generatedTemplate && (
                  <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                    <h4 className="text-indigo-900 font-bold mb-2">AI Preview: {generatedTemplate.templateName}</h4>
                    <p className="text-slate-700 whitespace-pre-wrap mb-4">{generatedTemplate.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {generatedTemplate.buttons.map((btn: string, i: number) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-lg border border-indigo-200 text-xs font-semibold text-indigo-600">
                          {btn}
                        </span>
                      ))}
                    </div>
                    <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl font-bold">Use this Template & Send</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
