import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Draft: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0f131a] dark:text-[#e0e0e0] font-sc h-screen flex overflow-hidden">
      <Sidebar variant="draft" />
      <div className="flex flex-col flex-1 min-w-0 bg-[#f9f9fb] dark:bg-background-dark">
        <header className="flex items-center justify-between border-b border-[#e8ecf2] dark:border-[#2a2a35] px-6 py-3 bg-surface-light dark:bg-surface-dark z-10 h-16">
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 text-primary p-1.5 rounded-md">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <h2 className="text-[#0f131a] dark:text-white text-lg font-bold tracking-tight">
              项目: 智能电网优化系统
              <span className="text-[#546892] font-normal text-sm ml-2">专利申请号 #29384</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-xs text-[#546892] font-medium mr-2 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                自动保存于 2分钟前
            </span>
            <button className="flex items-center justify-center gap-2 h-9 px-4 rounded-lg border border-[#e8ecf2] dark:border-[#3f3f46] hover:bg-[#f0f2f5] dark:hover:bg-[#2a2a35] text-[#0f131a] dark:text-white text-sm font-bold transition-colors">
                 <span className="material-symbols-outlined text-[18px]">save</span>
                <span>保存草稿</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-9 px-4 rounded-lg bg-primary text-white hover:bg-blue-600 shadow-md shadow-blue-500/20 text-sm font-bold transition-colors">
              <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
              <span>导出 PDF</span>
            </button>
             <div className="w-px h-6 bg-[#e8ecf2] dark:bg-[#3f3f46] mx-1"></div>
             <button className="flex items-center justify-center size-9 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#2a2a35] text-[#546892] transition-colors">
                <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <section className="w-[420px] flex flex-col border-r border-[#e8ecf2] dark:border-[#2a2a35] bg-surface-light dark:bg-surface-dark relative z-0">
            <div className="flex-1 overflow-y-auto p-5 pb-32 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-[#e8ecf2] dark:bg-[#3f3f46] flex-1"></div>
                    <span className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider">今日, 上午 10:23</span>
                    <div className="h-px bg-[#e8ecf2] dark:bg-[#3f3f46] flex-1"></div>
                </div>
              <div className="flex gap-4">
                <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                  <span className="material-symbols-outlined text-white text-[16px]">smart_toy</span>
                </div>
                <div className="flex flex-col gap-2 max-w-[90%]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-[#0f131a] dark:text-white">AI 助手</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-[#2a2a35] border border-[#e8ecf2] dark:border-[#3f3f46] rounded-xl rounded-tl-none shadow-sm text-sm text-[#0f131a] dark:text-[#d1d5db] leading-relaxed">
                    <p>
                      我已经分析了您上传的关于<strong>电网平衡算法</strong>的技术图表。这看起来是一个经典的反馈回路系统。
                    </p>
                    <p className="mt-2">
                      我们现在开始起草<strong>流程图</strong>和<strong>具体实施方式</strong>部分来解释逻辑流吗？
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 flex-row-reverse">
                <div
                  className="size-8 rounded-full bg-cover bg-center shrink-0 border border-[#e8ecf2]"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4BP8z7_95lPJEUoFv5bT-dvnLJFkbv0RnJiohPgVNNoKMFAfag0KBMHfklFuu0O_EZUQ_RE1XARAZSj0rajPTtMseQH0ATGhfardrxUnON4QEa1ZZry3pjWWisXLqP2cWiBHry09IJgdlXd4XGsPyh3UrvaX3qgtl1guNveJMZ43pN3sHJoEVcuDrbpBzTnSOCNyqgRp8_zEJq8Gdn48V0eaJvyGa2hVKn99yW4dYbWPuytCAQwZWYx1UO2v-F7Bgin-H6E1Bfl0")',
                  }}
                ></div>
                <div className="flex flex-col gap-2 items-end max-w-[85%]">
                  <div className="p-3 bg-primary text-white rounded-xl rounded-tr-none shadow-md shadow-blue-500/10 text-sm leading-relaxed">
                    <p>
                      是的，请先关注流程图部分。我需要一个数据收集 -&gt; 分析 -&gt; 决策逻辑的可视化。另外，描述要保持技术性但简洁。
                    </p>
                  </div>
                </div>
              </div>
               <div className="flex gap-4">
                    <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                    <span className="material-symbols-outlined text-white text-[16px]">smart_toy</span>
                    </div>
                    <div className="flex flex-col gap-2 max-w-[90%]">
                    <div className="flex items-baseline gap-2">
                        <span className="text-sm font-bold text-[#0f131a] dark:text-white">AI 助手</span>
                        <span className="text-[10px] text-[#546892]">刚刚</span>
                    </div>
                    <div className="p-3 bg-white dark:bg-[#2a2a35] border border-[#e8ecf2] dark:border-[#3f3f46] rounded-xl rounded-tl-none shadow-sm text-sm text-[#0f131a] dark:text-[#d1d5db] leading-relaxed">
                        <p>明白了。我已经生成了逻辑序列的 Mermaid 流程图代码，并起草了相应的段落。</p>
                        <p className="mt-2 text-[#546892]">操作:</p>
                        <div className="flex gap-2 mt-2">
                            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f5ff] dark:bg-blue-900/20 text-primary text-xs font-bold rounded-lg border border-blue-100 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors">
                                <span className="material-symbols-outlined text-[16px]">add_circle</span>
                                插入文档
                            </button>
                             <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f7f7f8] dark:bg-[#3f3f46] text-[#546892] dark:text-gray-300 text-xs font-bold rounded-lg border border-[#e8ecf2] dark:border-[#52525b] hover:bg-[#e8ecf2] dark:hover:bg-[#52525b] transition-colors">
                                <span className="material-symbols-outlined text-[16px]">refresh</span>
                                重新生成
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-white via-white to-transparent dark:from-surface-dark dark:via-surface-dark pt-10">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-xl opacity-20 group-hover:opacity-60 transition duration-500 blur-sm"></div>
                <div className="relative flex items-end gap-2 bg-white dark:bg-[#1e1e24] p-2 rounded-xl border border-transparent animate-[border-glow_3s_infinite_ease-in-out]">
                  <button className="p-2 text-[#546892] hover:text-primary transition-colors rounded-lg hover:bg-[#f0f5ff] dark:hover:bg-blue-900/20 shrink-0">
                    <span className="material-symbols-outlined">add_circle</span>
                  </button>
                  <textarea
                    className="w-full bg-transparent border-0 focus:ring-0 text-sm p-2.5 max-h-32 text-[#0f131a] dark:text-white placeholder:text-[#94a3b8] resize-none overflow-hidden outline-none"
                    placeholder="向 AI 提问以完善权利要求..."
                    rows={1}
                  ></textarea>
                  <button className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all shrink-0">
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>
                </div>
                 <div className="flex justify-between items-center mt-2 px-1">
                    <span className="text-[10px] text-[#94a3b8] font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px] text-purple-500">colors_spark</span>
                        模型: PatentGPT-4o (法律版)
                    </span>
                    <span className="text-[10px] text-[#94a3b8]">已用 1,204 tokens</span>
                </div>
              </div>
            </div>
          </section>
          <main className="flex-1 flex flex-col bg-[#f3f4f6] dark:bg-[#0c0c0f] min-w-0 relative">
            <div className="bg-surface-light dark:bg-surface-dark border-b border-[#e8ecf2] dark:border-[#2a2a35] px-6">
              <div className="flex gap-8 overflow-x-auto no-scrollbar">
                <button className="py-3 px-1 border-b-[3px] border-transparent text-[#546892] text-sm font-bold hover:text-[#0f131a] dark:hover:text-white transition-colors">
                  所属领域
                </button>
                <button className="py-3 px-1 border-b-[3px] border-transparent text-[#546892] text-sm font-bold hover:text-[#0f131a] dark:hover:text-white transition-colors">
                  背景技术
                </button>
                <button className="py-3 px-1 border-b-[3px] border-transparent text-[#546892] text-sm font-bold hover:text-[#0f131a] dark:hover:text-white transition-colors">
                  发明内容
                </button>
                <button className="py-3 px-1 border-b-[3px] border-transparent text-[#546892] text-sm font-bold hover:text-[#0f131a] dark:hover:text-white transition-colors">
                  有益效果
                </button>
                <button className="py-3 px-1 border-b-[3px] border-transparent text-[#546892] text-sm font-bold hover:text-[#0f131a] dark:hover:text-white transition-colors">
                  具体实施例
                </button>
                <button className="py-3 px-1 border-b-[3px] border-primary text-primary text-sm font-bold transition-colors">
                  流程图
                </button>
              </div>
            </div>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10">
                <div className="flex items-center gap-1 px-2 py-1.5 bg-surface-light dark:bg-[#2a2a35] rounded-full shadow-paper border border-[#e8ecf2] dark:border-[#3f3f46]">
                    <button className="size-8 flex items-center justify-center rounded-full hover:bg-[#f0f2f5] dark:hover:bg-[#3f3f46] text-[#0f131a] dark:text-white transition-colors">
                        <span className="material-symbols-outlined text-[18px]">format_bold</span>
                    </button>
                    <button className="size-8 flex items-center justify-center rounded-full hover:bg-[#f0f2f5] dark:hover:bg-[#3f3f46] text-[#0f131a] dark:text-white transition-colors">
                        <span className="material-symbols-outlined text-[18px]">format_italic</span>
                    </button>
                    <div className="w-px h-4 bg-[#e8ecf2] dark:bg-[#52525b] mx-1"></div>
                    <button className="flex items-center justify-center px-3 h-8 rounded-full hover:bg-[#f0f2f5] dark:hover:bg-[#3f3f46] text-[#0f131a] dark:text-white text-xs font-bold transition-colors gap-1">
                        <span className="material-symbols-outlined text-[18px]">title</span>
                        <span>标题2</span>
                    </button>
                     <div className="w-px h-4 bg-[#e8ecf2] dark:bg-[#52525b] mx-1"></div>
                    <button className="flex items-center justify-center px-3 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-bold transition-colors gap-1 border border-blue-100 dark:border-blue-800">
                        <span className="material-symbols-outlined text-[18px]">account_tree</span>
                        <span>Mermaid 图表</span>
                    </button>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-8 flex justify-center">
              <div className="w-full max-w-4xl bg-white dark:bg-[#1e1e24] shadow-paper rounded-lg min-h-[800px] p-12 text-[#1f2937] dark:text-[#d1d5db]">
                <div className="font-serif max-w-3xl mx-auto space-y-8">
                  <div className="text-center mb-10 pb-6 border-b border-gray-100 dark:border-gray-800">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-2">
                      图 4 - 逻辑流程
                    </h2>
                    <p className="text-sm text-gray-500 italic">实时预览 - 智能电网优化系统</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      流程图详细说明
                    </h3>
                    <p className="text-base leading-7 text-gray-700 dark:text-gray-300">
                      参考<strong>图 4</strong>，这里展示了描述电网平衡算法 400
                      的逻辑流程图。该过程始于步骤 402，在此步骤中从分布式智能电表收集实时数据。这些数据通常包括电压水平、电流消耗和相位角测量值。
                    </p>
                    <div className="my-10 p-1 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-[#151519]">
                        <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#2a2a35] rounded-t-lg border-b border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-[#546892] uppercase tracking-wider">Mermaid.js 预览</span>
                                <span className="px-1.5 py-0.5 rounded text-[10px] bg-green-100 text-green-700 font-bold">有效</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-xs text-primary hover:underline">编辑代码</button>
                                <button className="text-xs text-[#546892] hover:text-[#0f131a]"><span className="material-symbols-outlined text-[16px]">fullscreen</span></button>
                            </div>
                        </div>
                      <div className="relative h-[320px] w-full flex items-center justify-center overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                          }}
                        ></div>
                        <div className="flex flex-col items-center gap-8 relative z-0">
                          <div className="w-48 h-12 bg-white dark:bg-[#2a2a35] border-2 border-[#546892] rounded-md flex items-center justify-center shadow-sm relative node-connector-down">
                            <span className="text-xs font-bold text-[#0f131a] dark:text-white">
                              402: 数据采集
                            </span>
                          </div>
                          <div className="w-48 h-12 bg-white dark:bg-[#2a2a35] border-2 border-[#546892] rounded-md flex items-center justify-center shadow-sm relative node-connector-down">
                            <span className="text-xs font-bold text-[#0f131a] dark:text-white">
                              404: 归一化处理
                            </span>
                          </div>
                          <div className="flex gap-12 relative">
                                <div className="w-32 h-32 bg-primary rotate-45 flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
                                    <div className="-rotate-45 text-center">
                                        <span className="text-xs font-bold text-white block">406</span>
                                        <span className="text-[10px] font-medium text-blue-100 block">分析判断</span>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 left-[calc(50%+4rem)] w-12 h-0.5 bg-[#94a3b8]"></div>
                                <div className="absolute top-[36px] left-[calc(100%+2rem)] w-40 h-12 bg-white dark:bg-[#2a2a35] border border-dashed border-gray-400 rounded-md flex items-center justify-center shadow-sm">
                                    <span className="text-xs text-gray-500">记录异常</span>
                                </div>
                            </div>
                           <div className="w-48 h-12 bg-white dark:bg-[#2a2a35] border-2 border-[#546892] rounded-md flex items-center justify-center shadow-sm mt-2">
                                <span className="text-xs font-bold text-[#0f131a] dark:text-white">408: 动态调整</span>
                            </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-7 text-gray-700 dark:text-gray-300">
                      如决策模块 406 所示，如果分析检测到差异超过阈值（例如 &gt;5%），系统将启动调整协议（408）。否则，循环返回到监控状态。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Draft;