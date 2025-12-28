
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', sent: 4000, delivered: 3800, read: 2400 },
  { name: 'Tue', sent: 3000, delivered: 2900, read: 1800 },
  { name: 'Wed', sent: 2000, delivered: 1950, read: 1400 },
  { name: 'Thu', sent: 2780, delivered: 2700, read: 2100 },
  { name: 'Fri', sent: 1890, delivered: 1800, read: 1200 },
  { name: 'Sat', sent: 2390, delivered: 2300, read: 1700 },
  { name: 'Sun', sent: 3490, delivered: 3400, read: 2800 },
];

const StatCard: React.FC<{ title: string; value: string; delta: string; icon: React.ReactNode; color: string }> = ({ title, value, delta, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-opacity-100`}>
        {icon}
      </div>
      <span className={`text-sm font-medium ${delta.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{delta}</span>
    </div>
    <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Messages Sent" 
          value="1,284,042" 
          delta="+12.5%" 
          color="text-indigo-600"
          icon={<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>}
        />
        <StatCard 
          title="Delivery Rate" 
          value="98.2%" 
          delta="+0.4%" 
          color="text-blue-600"
          icon={<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard 
          title="Read Rate" 
          value="84.7%" 
          delta="+2.1%" 
          color="text-emerald-600"
          icon={<svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
        />
        <StatCard 
          title="Conversion" 
          value="12.4%" 
          delta="-0.5%" 
          color="text-amber-600"
          icon={<svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Message Engagement</h3>
            <select className="text-sm bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-indigo-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="sent" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorSent)" />
                <Area type="monotone" dataKey="read" stroke="#10b981" strokeWidth={3} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-lg mb-6">Recent Campaigns</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold">W</div>
                  <div>
                    <h4 className="text-sm font-semibold">Summer Promo #{i}</h4>
                    <p className="text-xs text-slate-500">Sent to 10k contacts</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">Live</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-indigo-600 text-sm font-semibold hover:bg-indigo-50 rounded-lg transition-colors">
            View All Campaigns
          </button>
        </div>
      </div>
    </div>
  );
};
