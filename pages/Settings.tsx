import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white antialiased transition-colors duration-200 min-h-screen flex">
      <Sidebar variant="main" />
      <div className="flex-grow flex flex-col h-screen overflow-y-auto">
        <header className="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-3 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight">系统与模型设置</h2>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-text-main dark:text-white tracking-tight mb-2">
              系统设置
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-base max-w-2xl">
              配置您的 AI 模型偏好、API 连接以及专利生成的默认输出参数。
            </p>
          </div>
          <div className="mb-10 border-b border-border-light dark:border-border-dark">
            <nav aria-label="Tabs" className="flex gap-8 -mb-px overflow-x-auto">
              <a
                href="#"
                className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-text-main hover:border-gray-300 whitespace-nowrap"
              >
                系统参数
              </a>
              <a
                href="#"
                className="border-b-2 border-primary py-4 px-1 text-sm font-bold text-primary whitespace-nowrap flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">smart_toy</span>
                模型配置
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-text-main hover:border-gray-300 whitespace-nowrap"
              >
                输出格式
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-text-main hover:border-gray-300 whitespace-nowrap"
              >
                计费与 API
              </a>
            </nav>
          </div>
          <div className="grid grid-cols-1 gap-12">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-text-main dark:text-white">
                  AI 引擎提供商
                </h3>
                <span
                  className="material-symbols-outlined text-text-secondary text-lg cursor-help"
                  title="选择用于专利起草的底层大语言模型。"
                >
                  info
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-px bg-gradient-to-r from-primary to-blue-400 rounded-xl opacity-100 blur-[2px] transition duration-200"></div>
                  <div className="relative h-full flex flex-col justify-between bg-surface-light dark:bg-surface-dark rounded-xl p-6 border-2 border-primary shadow-card">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="size-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                          <span className="material-symbols-outlined text-3xl">psychology</span>
                        </div>
                        <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                          <span className="material-symbols-outlined text-sm font-bold">
                            check
                          </span>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-text-main dark:text-white mb-1">
                        硅基流动 (DeepSeek)
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-gray-400 mb-4">
                        DeepSeek-V3。针对复杂逻辑推理和详细权利要求分析进行了优化。
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark flex justify-between items-center">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        推荐用于权利要求
                      </span>
                      <span className="text-xs text-text-secondary">v3.0.1</span>
                    </div>
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <div className="relative h-full flex flex-col justify-between bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-border-light dark:border-border-dark hover:border-gray-300 dark:hover:border-gray-600 transition-all shadow-card hover:shadow-card-hover">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                        </div>
                        <div className="size-6 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                      </div>
                      <h4 className="text-lg font-bold text-text-main dark:text-white mb-1">
                        Google Gemini
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-gray-400 mb-4">
                        Gemini Pro 1.5。卓越的上下文窗口处理和自然语言起草能力。
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark flex justify-between items-center">
                      <span className="text-xs font-semibold text-text-secondary bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        最适合描述部分
                      </span>
                      <span className="text-xs text-text-secondary">Pro 1.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-2xl">key</span>
                  <h3 className="text-lg font-bold text-text-main dark:text-white">API 配置</h3>
                </div>
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  已连接
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-text-main dark:text-gray-200 mb-2">
                    硅基流动 API 密钥
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full rounded-lg border-border-light dark:border-border-dark dark:bg-[#25252b] dark:text-white pl-4 pr-32 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-shadow"
                      id="api-key"
                      placeholder="sk-..."
                      type="password"
                      defaultValue="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-1">
                      <button
                        className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          visibility_off
                        </span>
                      </button>
                      <button
                        className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded-md transition-colors"
                        type="button"
                      >
                        验证
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-text-secondary dark:text-gray-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    您的密钥已加密并存储在本地。
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">tune</span>
                <h3 className="text-lg font-bold text-text-main dark:text-white">模型参数</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                      <label className="text-sm font-semibold text-text-main dark:text-gray-200">
                        温度设置
                      </label>
                      <span
                        className="material-symbols-outlined text-gray-400 text-[16px] cursor-help"
                        title="控制随机性。数值越低，确定性越高。"
                      >
                        help
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white text-xs font-mono font-bold">
                      0.2
                    </span>
                  </div>
                  <input
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    max="1"
                    min="0"
                    step="0.1"
                    type="range"
                    defaultValue="0.2"
                  />
                  <div className="flex justify-between text-xs text-text-secondary dark:text-gray-500 font-medium">
                    <span>精确 (0.0)</span>
                    <span className="text-primary font-bold">平衡 (0.5)</span>
                    <span>创造性 (1.0)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 mb-2">
                    <label className="text-sm font-semibold text-text-main dark:text-gray-200">
                      上下文窗口
                    </label>
                    <span
                      className="material-symbols-outlined text-gray-400 text-[16px] cursor-help"
                      title="模型一次能处理的最大 Token 数量。"
                    >
                      help
                    </span>
                  </div>
                  <div className="relative">
                    <select
                      className="block w-full rounded-lg border-border-light dark:border-border-dark dark:bg-[#25252b] dark:text-white py-2.5 pl-3 pr-10 text-sm focus:border-primary focus:ring-1 focus:ring-primary shadow-sm appearance-none cursor-pointer"
                      defaultValue="32k Tokens (扩展)"
                    >
                      <option>8k Tokens (标准)</option>
                      <option>32k Tokens (扩展)</option>
                      <option>128k Tokens (全上下文)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary dark:text-gray-400 mt-1">
                    更大的上下文允许分析更长的现有技术文档。
                  </p>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-text-secondary text-xl">
                    language
                  </span>
                  <h4 className="text-base font-bold text-text-main dark:text-white">输出语言</h4>
                </div>
                <div className="relative">
                  <select
                    className="block w-full rounded-lg border-border-light dark:border-border-dark dark:bg-[#25252b] dark:text-white py-2.5 pl-3 pr-10 text-sm focus:border-primary focus:ring-1 focus:ring-primary shadow-sm appearance-none"
                    defaultValue="英语 (US) - USPTO 标准"
                  >
                    <option>英语 (US) - USPTO 标准</option>
                    <option>英语 (UK)</option>
                    <option>德语 (DE)</option>
                    <option>日语 (JP)</option>
                    <option>中文 (CN)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-text-secondary text-xl">
                    contrast
                  </span>
                  <h4 className="text-base font-bold text-text-main dark:text-white">
                    界面主题
                  </h4>
                </div>
                <div className="flex gap-2">
                  <label className="flex-1 cursor-pointer">
                    <input className="peer sr-only" name="theme" type="radio" />
                    <div className="flex flex-col items-center gap-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light p-3 peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary peer-checked:bg-primary/5 transition-all">
                      <span className="material-symbols-outlined text-gray-600">light_mode</span>
                      <span className="text-xs font-medium text-gray-700">浅色</span>
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input className="peer sr-only" name="theme" type="radio" />
                    <div className="flex flex-col items-center gap-2 rounded-lg border border-border-light dark:border-border-dark bg-[#1e1e24] p-3 peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary transition-all">
                      <span className="material-symbols-outlined text-gray-400">dark_mode</span>
                      <span className="text-xs font-medium text-gray-400">深色</span>
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input className="peer sr-only" name="theme" type="radio" defaultChecked />
                    <div className="flex flex-col items-center gap-2 rounded-lg border border-border-light dark:border-border-dark bg-gradient-to-br from-background-light to-[#1e1e24] p-3 peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary transition-all">
                      <span className="material-symbols-outlined text-gray-500">
                        settings_brightness
                      </span>
                      <span className="text-xs font-medium text-text-main">跟随系统</span>
                    </div>
                  </label>
                </div>
              </div>
            </section>
          </div>
          <div className="h-20"></div>
        </main>
        <div className="fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark p-4 z-40">
          <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
            <button
              className="text-text-secondary dark:text-gray-400 text-sm font-semibold hover:text-text-main dark:hover:text-white transition-colors flex items-center gap-2"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">restart_alt</span>
              恢复默认值
            </button>
            <div className="flex gap-4">
              <button
                className="px-6 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#25252b] text-text-main dark:text-white text-sm font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                type="button"
              >
                取消
              </button>
              <button
                className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all flex items-center gap-2"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">save</span>
                保存更改
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;