import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, BarChart, Bar } from 'recharts';
import { useState } from "react";
import { Activity, BarChart3, TrendingUp } from "lucide-react";

const DataVisualization = () => {
  const { t } = useLanguage();
  const [activeChart, setActiveChart] = useState<'overview' | 'weekly' | 'monthly'>('overview');
  
  // Demo data for the chart (converted to percentages)
  const overviewData = [
    {
      name: t("week1"),
      screenTime: 70, // percentage of baseline
      gymVisits: 20,  // percentage of target
      productivity: 65, // percentage of optimal
    },
    {
      name: t("week2"),
      screenTime: 65,
      gymVisits: 40,
      productivity: 68,
    },
    {
      name: t("week3"),
      screenTime: 60,
      gymVisits: 40,
      productivity: 70,
    },
    {
      name: t("week4"),
      screenTime: 53,
      gymVisits: 60,
      productivity: 75,
    },
    {
      name: t("week5"),
      screenTime: 47,
      gymVisits: 60,
      productivity: 78,
    },
    {
      name: t("week6"),
      screenTime: 43,
      gymVisits: 80,
      productivity: 82,
    },
    {
      name: t("week7"),
      screenTime: 42,
      gymVisits: 80,
      productivity: 85,
    },
    {
      name: t("week8"),
      screenTime: 37,
      gymVisits: 100,
      productivity: 89,
    },
  ];

  const weeklyData = [
    { day: t("monday"), screenTime: 70, gymVisits: 50, productivity: 72 },
    { day: t("tuesday"), screenTime: 58, gymVisits: 0, productivity: 68 },
    { day: t("wednesday"), screenTime: 63, gymVisits: 50, productivity: 75 },
    { day: t("thursday"), screenTime: 53, gymVisits: 0, productivity: 70 },
    { day: t("friday"), screenTime: 48, gymVisits: 50, productivity: 82 },
    { day: t("saturday"), screenTime: 42, gymVisits: 50, productivity: 88 },
    { day: t("sunday"), screenTime: 33, gymVisits: 50, productivity: 90 },
  ];

  const monthlyData = [
    { month: t("jan"), screenTime: 95, gymVisits: 40, productivity: 72 },
    { month: t("feb"), screenTime: 87, gymVisits: 50, productivity: 75 },
    { month: t("mar"), screenTime: 80, gymVisits: 60, productivity: 79 },
    { month: t("apr"), screenTime: 70, gymVisits: 70, productivity: 82 },
    { month: t("may"), screenTime: 63, gymVisits: 80, productivity: 85 },
    { month: t("jun"), screenTime: 55, gymVisits: 90, productivity: 88 },
  ];
  
  const getActiveData = () => {
    switch (activeChart) {
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
      default:
        return overviewData;
    }
  };
  
  const getDataKey = () => {
    switch (activeChart) {
      case 'weekly':
        return 'day';
      case 'monthly':
        return 'month';
      default:
        return 'name';
    }
  };

  // Custom formatter to add percentage sign
  const percentFormatter = (value: number) => `${value}%`;

  const stats = [
    {
      title: "65%",
      description: t("productivityIncrease"),
      icon: <TrendingUp className="h-5 w-5 text-blue-400" />,
    },
    {
      title: "48%",
      description: t("screenTimeReduction"),
      icon: <BarChart3 className="h-5 w-5 text-indigo-400" />,
    },
    {
      title: "400%",
      description: t("gymVisitsIncrease"),
      icon: <Activity className="h-5 w-5 text-purple-400" />,
    },
  ];

  return (
    <div className="py-20 sm:py-32 px-4 sm:px-6 bg-slate-950 relative overflow-hidden">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGridDataViz" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGridDataViz)" />
          </svg>
        </div>
        
        {/* Subtle gradient spots */}
        <div className="absolute top-40 right-[25%] w-96 h-96 rounded-full bg-blue-600/5 blur-[120px]"></div>
        <div className="absolute bottom-40 left-[15%] w-80 h-80 rounded-full bg-indigo-600/5 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with animation */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-slate-800 text-blue-400 shadow-sm border border-slate-700/50">
              {t("dataVisualization")}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
          >
            {t("productivityTitle")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-slate-400"
          >
            {t("productivityDescription")}
          </motion.p>
        </div>
        
        {/* Time period selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex rounded-lg bg-slate-800/40 p-1 border border-slate-700/30">
            <button
              onClick={() => setActiveChart('overview')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeChart === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t("overview")}
            </button>
            <button
              onClick={() => setActiveChart('weekly')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeChart === 'weekly'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t("weekly")}
            </button>
            <button
              onClick={() => setActiveChart('monthly')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeChart === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t("monthly")}
            </button>
          </div>
        </motion.div>
        
        {/* Main Chart - With percentages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/30 shadow-sm mb-12"
        >
          <div className="flex items-center justify-center flex-wrap gap-4 mb-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400/30 border border-blue-400"></div>
              <span>{t("productivity")}: {t("percentOfOptimal")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-indigo-400/30 border border-indigo-400"></div>
              <span>{t("screenTime")}: {t("percentOfBaseline")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400/30 border border-green-400"></div>
              <span>{t("gymVisits")}: {t("percentOfTarget")}</span>
            </div>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={getActiveData()}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis 
                  dataKey={getDataKey()} 
                  stroke="#64748b" 
                  tick={{ fill: '#94a3b8' }}
                />
                <YAxis 
                  stroke="#64748b" 
                  tick={{ fill: '#94a3b8' }}
                  tickFormatter={percentFormatter}
                  domain={[0, 100]}
                  label={{ 
                    value: '%', 
                    position: 'insideLeft',
                    angle: -90,
                    style: { textAnchor: 'middle', fill: '#94a3b8' },
                    dy: 50
                  }}
                />
                <Tooltip 
                  formatter={(value: number) => [`${value}%`, null]}
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    borderColor: '#334155', 
                    color: '#f8fafc',
                    borderRadius: '0.5rem'
                  }}
                  labelStyle={{ color: '#f8fafc' }}
                />
                <Legend formatter={(value) => {
                  if (value === 'productivity') return t("productivity");
                  if (value === 'screenTime') return t("screenTime");
                  if (value === 'gymVisits') return t("gymVisits");
                  return value;
                }}/>
                <Area 
                  type="monotone" 
                  dataKey="productivity" 
                  name={t("productivity")}
                  stroke="#3b82f6" 
                  fill="rgba(59, 130, 246, 0.2)" 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="screenTime" 
                  name={t("screenTime")}
                  stroke="#8b5cf6" 
                  fill="rgba(139, 92, 246, 0.2)" 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="gymVisits" 
                  name={t("gymVisits")}
                  stroke="#10b981" 
                  fill="rgba(16, 185, 129, 0.2)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        {/* Key stats grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 shadow-sm flex items-start gap-4"
            >
              <div className="rounded-lg p-3 bg-slate-800 border border-slate-700/30">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{stat.title}</div>
                <p className="text-slate-400 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Bottom CTA section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-4">{t("readyJourney")}</h3>
          <p className="text-slate-400 mb-6">{t("transformedUsers")}</p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-colors">
            {t("getStarted")}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DataVisualization; 