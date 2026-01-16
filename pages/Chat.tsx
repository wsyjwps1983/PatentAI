import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Chat: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 h-screen w-screen overflow-hidden flex">
      <Sidebar variant="chat" />
      <main className="flex-1 flex flex-col relative bg-background-light dark:bg-background-dark min-w-0">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 bg-surface-light dark:bg-surface-dark shrink-0">
          <div className="flex items-center gap-3">
             <button className="md:hidden p-2 -ml-2 text-slate-500">
                <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                电池热管理系统
                <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-[10px] font-bold uppercase tracking-wide border border-yellow-200">
                  构思阶段
                </span>
              </h2>
              <p className="text-xs text-slate-500">上次编辑于 2 分钟前</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border border-white shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAr9A0RhzI7HDpJUVs2NfcbfCZeINYGx1CW7oH_HECD0oakjZvZh7pirlhOCwVuBlekky_qK1tJThRhlAJ95LEad1JsVG715Q9r_11iTlZaMbjxWUF2fUSuxCbIyI8upyKpKZe1q5F1U4NOTfRQ6_IwpzmyMjn5GBlgqZaR6zbfmNv1PDextTBQ6VMVRTyF2D1z9Ou2GH8i5GHkLqulprNw0EIjpLiAbN8wML1qDfnkQwoy8Um4rju7afNHpIX8uICgimiYePM7BF4")'}}></div>
            </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-6 scroll-smooth">
          <div className="flex justify-center my-4">
            <span className="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              今天, 上午 10:42
            </span>
          </div>
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-primary flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-[20px]">smart_toy</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-slate-500 ml-1">创意助手</span>
              <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none shadow-subtle text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
                <p>
                  让我们来完善核心创新点。为了更好地理解其新颖性，您的电池冷却系统与目前电动汽车中使用的标准液体冷却方法有何不同？
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 max-w-3xl self-end flex-row-reverse">
            <div
              className="h-10 w-10 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border border-white shadow-sm"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCWcWIookFIguRc0K7lWNug4hGyKRgyFIKuceQjzxne0WKjMK2cMqXJlGuqk-9NpzG2KNz8Genst9sNCbg3ccZXxpRm-RqiBfJisb9G6P2jJ5UaUoy96BE81oIoivRvpfLMbxw44KWk14NCZnQMd96vYJhiT5UJ1nYwCLm5hovAr4TZ-1D2ENxTBS0EZ931_2dEyI4xSEvtg5_FIJnPUwBnBS-fbR5l5iwYK1m5Lsag_Tx8gao5gdwDyq0w5Zr5C9aaAoi-0xrJZo")',
              }}
            ></div>
            <div className="flex flex-col gap-1.5 items-end">
              <span className="text-xs font-semibold text-slate-500 mr-1">你</span>
              <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-md text-[15px] leading-relaxed">
                <p>
                  它使用一种直接应用于阳极的局部相变材料（PCM），仅在热负荷峰值时激活。它是被动的，不同于主动液体泵送。
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-primary flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-[20px]">smart_toy</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-slate-500 ml-1">创意助手</span>
              <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none shadow-subtle text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
                <p>很有趣。这种材料是被动再生，还是需要外部热循环来重置其状态？</p>
              </div>
            </div>
          </div>
           <div className="flex items-start gap-4 max-w-3xl self-end flex-row-reverse">
            <div
              className="h-10 w-10 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border border-white shadow-sm"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCWcWIookFIguRc0K7lWNug4hGyKRgyFIKuceQjzxne0WKjMK2cMqXJlGuqk-9NpzG2KNz8Genst9sNCbg3ccZXxpRm-RqiBfJisb9G6P2jJ5UaUoy96BE81oIoivRvpfLMbxw44KWk14NCZnQMd96vYJhiT5UJ1nYwCLm5hovAr4TZ-1D2ENxTBS0EZ931_2dEyI4xSEvtg5_FIJnPUwBnBS-fbR5l5iwYK1m5Lsag_Tx8gao5gdwDyq0w5Zr5C9aaAoi-0xrJZo")',
              }}
            ></div>
            <div className="flex flex-col gap-1.5 items-end">
              <span className="text-xs font-semibold text-slate-500 mr-1">你</span>
              <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-md text-[15px] leading-relaxed">
                <p>
                  当电池温度降至 30°C 以下时，它会在非高峰期被动再生。
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-primary flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-[20px] animate-pulse">
                smart_toy
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-slate-500 ml-1">创意助手</span>
              <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none shadow-subtle text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
                <p className="mb-2">
                  这种被动再生循环是一个关键的差异化因素。我正在根据这一新细节更新候选发明列表。
                </p>
                <p>是否有某种特定的化学成分对该发明至关重要？</p>
              </div>
            </div>
          </div>
          <div className="h-12 w-full shrink-0"></div>
        </div>
        <div className="p-4 md:px-8 md:pb-6 bg-transparent">
          <div className="max-w-4xl mx-auto flex flex-col gap-3">
             <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all text-sm whitespace-nowrap shadow-sm text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                    关注化学成分
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all text-sm whitespace-nowrap shadow-sm text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-[18px]">compare_arrows</span>
                    对比现有技术
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all text-sm whitespace-nowrap shadow-sm text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-[18px]">science</span>
                    阐明温度范围
                </button>
             </div>
            <div className="relative flex items-end gap-2 bg-white dark:bg-surface-dark p-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 ring-1 ring-black/5 focus-within:ring-primary focus-within:border-primary transition-all">
              <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 shrink-0">
                <span className="material-symbols-outlined">add_circle</span>
              </button>
              <textarea
                className="w-full bg-transparent border-none focus:ring-0 text-slate-800 dark:text-slate-200 placeholder-slate-400 resize-none py-2.5 max-h-32 text-base outline-none"
                placeholder="描述材料属性..."
                rows={1}
              ></textarea>
              <button className="p-2 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-md transition-colors shrink-0 mb-0.5">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            <p className="text-center text-[11px] text-slate-400">AI 可能会犯错。请核实重要的专利细节。</p>
          </div>
        </div>
      </main>
      <aside className="w-[380px] shrink-0 bg-surface-light dark:bg-surface-dark border-l border-slate-200 dark:border-slate-800 flex flex-col z-10 shadow-float hidden xl:flex">
        <div className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-5 shrink-0">
          <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            候选专利题目与摘要 (10个)
          </h3>
          <button className="flex items-center gap-1 text-slate-500 hover:text-primary transition-colors py-1.5 px-2.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold" title="重新生成">
                <span className="material-symbols-outlined text-[18px]">refresh</span>
                <span>重新生成</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-slate-50/50 dark:bg-black/20">
          <div className="group relative bg-white dark:bg-surface-dark rounded-xl p-4 border-2 border-primary shadow-md cursor-pointer transition-all hover:shadow-lg">
            <div className="absolute -top-2.5 -right-2.5 h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center shadow-sm z-10">
              <span className="material-symbols-outlined text-[16px] font-bold">check</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight pr-4">
                被动式相变阳极冷却
              </h4>
              <span className="text-[10px] font-bold text-primary bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full uppercase tracking-wide">
                高新颖性
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-3">
              一种用于热管理的系统，利用直接结合到阳极表面的局部相变材料层。该材料在峰值负载温度（例如 &gt;45°C）下发生相变以吸收热量，无需主动泵送机制。
            </p>
             <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-3 mt-1">
                <span className="text-[10px] text-slate-400">评分: 92/100</span>
                <button className="text-xs font-bold text-primary hover:text-primary-dark">编辑详情</button>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-surface-dark rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer hover:border-primary/50 transition-all hover:shadow-md">
                <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight pr-4">再生热电池接口</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-3">
                    一种利用闭环热接口回收电动汽车电池废热的方法，该接口在放电期间捕获热量，并在被动冷却循环期间释放热量以预调节电池。
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-3 mt-1">
                    <span className="text-[10px] text-slate-400">评分: 85/100</span>
                    <button className="text-xs font-semibold text-slate-500 group-hover:text-primary transition-colors">选择</button>
                </div>
            </div>
            <div className="group relative bg-white dark:bg-surface-dark rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer hover:border-primary/50 transition-all hover:shadow-md">
                <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight pr-4">自调节 PCM 电解质复合材料</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-3">
                    一种注入微胶囊相变材料的电解质组合物，可在整个电池体积内提供分布式热缓冲，防止局部热点。
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-3 mt-1">
                    <span className="text-[10px] text-slate-400">评分: 78/100</span>
                    <button className="text-xs font-semibold text-slate-500 group-hover:text-primary transition-colors">选择</button>
                </div>
            </div>
             <div className="animate-pulse bg-white dark:bg-surface-dark rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-3"></div>
                <div className="space-y-2 mb-3">
                    <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded"></div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded"></div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-5/6"></div>
                </div>
            </div>
        </div>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark">
          <button
            onClick={() => navigate('/draft')}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>确认选择</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-2">已选: 被动式相变阳极冷却</p>
        </div>
      </aside>
    </div>
  );
};

export default Chat;