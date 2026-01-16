import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-50 overflow-hidden">
      <Sidebar variant="main" />
      <main className="flex-1 flex flex-col h-full min-w-0 relative">
        <header className="h-16 shrink-0 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 z-10 sticky top-0">
          <div className="w-full max-w-md">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
                  search
                </span>
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm transition-shadow"
                placeholder="搜索专利、权利要求或关键词..."
                type="text"
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                <span className="text-slate-400 text-xs border border-slate-300 dark:border-slate-600 rounded px-1.5 py-0.5">⌘K</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-surface-dark"></span>
            </button>
             <button className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                <span className="material-symbols-outlined">help</span>
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                  我的专利
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  管理、跟踪并生成您的智能专利草稿。
                </p>
              </div>
              <button
                onClick={() => navigate('/chat')}
                className="group flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="material-symbols-outlined">add</span>
                <span className="font-bold">创建新专利</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-full text-sm font-medium transition-colors">
                  所有项目
                  <span className="bg-white dark:bg-slate-600 px-1.5 rounded-full text-xs text-slate-500 dark:text-slate-300">
                    12
                  </span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium transition-colors">
                  撰写中
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium transition-colors">
                  AI生成中
                  <span className="flex size-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-2 bg-blue-500"></span>
                  </span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium transition-colors">
                    已完成
                </button>
              </div>
               <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">排序方式:</span>
                <button className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                    最后修改
                    <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
                </button>
                <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-2"></div>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined">list</span>
                </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
              <div
                onClick={() => navigate('/draft')}
                className="cursor-pointer group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                <div
                  className="h-40 bg-slate-100 dark:bg-slate-800 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6BL470cdYZquscPiLWEWaX73gLByz2kLTm4zfZ15TEnFWtPs4FD9KWc6rjWUdOEikX5eoY_M3SNpa2bNwg_5wOH7DeOWrNeydy9wQ5PmL5-QfaoRge1FCEAkD2nOOS8BaFBRo_EJ-ZlZcgDjgy9_x4dfqeKPMhiI5fCT_gF3eOjqUs3GkabQJ2GMN2nlI61CCD9vpgUdrVnYOhcNCA3poYaphp3DZjgQQCxqDnb6yzCyGvTKYkKfY-KM9vSjLjAjM4Hp7yd9AilQ")',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/90 backdrop-blur-sm border border-blue-400/50">
                        <span className="material-symbols-outlined text-white text-[14px] animate-pulse">
                          auto_awesome
                        </span>
                        <span className="text-xs font-bold text-white tracking-wide">AI生成中</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                   <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight line-clamp-2 group-hover:text-primary transition-colors">基于激光雷达的自主无人机导航系统</h3>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                    </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
                    一种利用多层传感器融合和预测AI模型在复杂城市环境中进行实时寻路以避开动态障碍物的方法。
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        正在撰写权利要求...
                      </span>
                      <span className="text-xs font-mono text-slate-400">72%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-primary h-1.5 rounded-full relative overflow-hidden"
                        style={{ width: '72%' }}
                      >
                        <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12 translate-x-[-100%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => navigate('/chat')}
                className="cursor-pointer group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col h-full"
              >
                <div
                  className="h-40 bg-slate-100 dark:bg-slate-800 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOkl0B5qObmPjj47FOQj_gcKWPSu7k2VxJEgoFbnEA0OKj_QwA1NKMi51HErgP-xG_wdTSV6L9ICm6Azc2Q3KcXAspHX8_RZnAHtsa653xgYpoyCsGV0YCgaAnVHoS3bhEvO21HN54FqLdDit4W4ubwUsMltHmlT0Z3zagkRuiU9nXiUaCIr_gPSLfNn0zZyb4PwXLA-ateqXmK5FvAR5vyDr3Xf7T7RP2QqkbiwSGP0xaYp7Xo1oyy9suJ9rFANEzah6LYYwwIUY")',
                  }}
                >
                  <div className="absolute top-3 right-3">
                    <div className="p-1.5 bg-white/90 dark:bg-black/50 backdrop-blur rounded-lg shadow-sm">
                      <span className="material-symbols-outlined text-slate-400 text-[18px]">
                        lock
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                   <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight line-clamp-2 group-hover:text-primary transition-colors">量子加密密钥分发</h3>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      <span className="size-1.5 rounded-full bg-slate-400"></span>撰写中
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
                    一种在光纤网络上利用纠缠光子对分发加密密钥的系统，确保无条件防止窃听的安全。
                  </p>
                   <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center gap-2">
                        <div className="size-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold">AM</div>
                        <span className="text-xs text-slate-400">2小时前编辑</span>
                    </div>
                </div>
              </div>

               <div className="group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-green-200 dark:hover:border-green-900 transition-all duration-300 flex flex-col h-full">
                <div className="h-40 bg-slate-100 dark:bg-slate-800 bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA04JZ_pHrEfN8v3rk4H9BuRJ7qktvnG8EJ_pG_K4S65KUDJYmB1rK1yaWo8dGdhaU6b9PssAR8hr6jm784IZTdPTcvwEIHA3nPNjyU6HaIadPOsO5jHuFtyZwNjM9WBidLQCFGFo9nyxHLVEN8ictsce4Ayb3_A5VORAdDOXIBimIV5OD1PWUGgr0ds-LlWYXLmpN2F_6JImeekxg2fEW0HJD-wBYLstvlCrDnkJNjEEHUoNlw85A7CAputNK8xm-GP3qkp3OmPjk")'}}>
                </div>
                <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight line-clamp-2 group-hover:text-primary transition-colors">可持续生物聚合物包装</h3>
                         <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                    </div>
                    <div className="mb-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span>
                            已完成
                        </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
                        一种由藻类聚合物合成的可生物降解包装材料，具有增强的抗拉强度和防潮性能。
                    </p>
                     <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                        <span className="text-xs text-slate-400">已于 2023年10月12日 提交</span>
                        <button className="text-xs font-semibold text-primary hover:underline">查看 PDF</button>
                    </div>
                </div>
            </div>

            <div className="group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col h-full">
                <div className="h-40 bg-slate-100 dark:bg-slate-800 bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGliadlA2yev1rTc6lB9H7OhVOuvwS5w4k6LQle3CJdzwcscK-r9QB4q-eMP0FCSmHqR_zr0gOVzJIWx9tkylWd2dOoPVGCgRuWmWuQm6q__5NXKmN9HrvmiOJ3j-W9AcKFpjg3IVeQeNOJaLHu-f09To2WYeua1M-LngrW4y1W50-WckbrY100mhWxv4NunbN8UGPPM094nFbRaCJtOFYqjT_kb4t9uxA6SsuV3jhEknxTpJIMYCWbrvIPAkesEP7bLs9r-jGmgM")'}}>
                </div>
                <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight line-clamp-2 group-hover:text-primary transition-colors">VR触觉反馈接口</h3>
                         <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                    </div>
                    <div className="mb-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            <span className="size-1.5 rounded-full bg-slate-400"></span>
                            撰写中
                        </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
                        一种可穿戴手套装置，提供局部压力和热反馈，以模拟虚拟现实环境中的物理触摸。
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center gap-2">
                        <div className="size-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[10px] font-bold">JS</div>
                        <span className="text-xs text-slate-400">昨天编辑</span>
                    </div>
                </div>
            </div>

            <div className="group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 flex flex-col h-full overflow-hidden">
                <div className="h-40 bg-slate-100 dark:bg-slate-800 bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaZhahFwqoxsrtg-dwiK_sx2_ps6l022GMFZFzwDjssJFBnc-vyaIslwz5yN6GGyFtuF0cCltQ0aOm43ITWOx2ekplEVFaNX0yqETp4u5J00KAo78awbIE5h-O60Sm7tJUSRuvSTdtvHxGDlDSioN2GXibh3BHQj1oi2X99LOVQXC4Ca2wkqj9xtZkGT6_Eq2JsLapwdAJMAdt-01WCiVCRzICJsE653rWYHotlhL77vQJqOYk9G1U8CPqnaljjcsXeNpGP0BMViI")'}}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex justify-between items-center">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/90 backdrop-blur-sm border border-blue-400/50">
                                <span className="material-symbols-outlined text-white text-[14px] animate-pulse">auto_awesome</span>
                                <span className="text-xs font-bold text-white tracking-wide">AI生成中</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight line-clamp-2 group-hover:text-primary transition-colors">工业物联网预测性维护</h3>
                         <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
                        机器学习算法分析振动和声学数据，以在故障发生前预测制造机械的组件故障。
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">正在分析现有技术...</span>
                            <span className="text-xs font-mono text-slate-400">35%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out relative overflow-hidden" style={{width: '35%'}}>
                                <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12 translate-x-[-100%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

              <button
                onClick={() => navigate('/chat')}
                className="group border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-primary dark:hover:border-primary hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all h-full min-h-[300px]"
              >
                <div className="size-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-[32px]">
                    add
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary">
                  开始新项目
                </h3>
                <p className="text-sm text-slate-500 max-w-[200px]">
                  创建一个空白专利草稿或从模板开始。
                </p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;