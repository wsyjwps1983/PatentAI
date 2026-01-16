import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  variant?: 'main' | 'chat' | 'draft';
}

const Sidebar: React.FC<SidebarProps> = ({ variant = 'main' }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-[260px] md:w-72 flex-shrink-0 flex flex-col bg-surface-light dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 z-20 transition-all duration-300 h-screen">
      <div className="p-6 pb-2">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <span className="material-symbols-outlined icon-filled">smart_toy</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">
              PatentAI
            </h1>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">企业版</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto no-scrollbar">
        {variant === 'main' && (
          <>
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                isActive('/dashboard')
                  ? 'bg-primary/10 text-primary dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive('/dashboard') ? 'icon-filled' : ''}`}>
                dashboard
              </span>
              <span className="text-sm font-semibold">仪表盘</span>
            </Link>

            <div className="pt-4 pb-2 px-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">工作区</p>
            </div>

            <Link
              to="/chat"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                isActive('/chat')
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                psychology
              </span>
              <span className="text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                创意沟通
              </span>
            </Link>

            <Link
              to="/draft"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                isActive('/draft')
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                description
              </span>
              <span className="text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                撰写中心
              </span>
            </Link>
            
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                bookmark
              </span>
              <span className="text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                已存草稿
              </span>
            </a>

            <div className="pt-4 pb-2 px-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">配置</p>
            </div>

            <Link
              to="/settings"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                isActive('/settings')
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                tune
              </span>
              <span className="text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                AI 设置
              </span>
            </Link>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <span className="material-symbols-outlined group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                settings
              </span>
              <span className="text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                系统设置
              </span>
            </a>
          </>
        )}

        {variant === 'chat' && (
           <>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <span className="material-symbols-outlined text-[22px]">home</span>
              <span className="text-sm font-medium">首页</span>
            </Link>
             <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <span className="material-symbols-outlined text-[22px]">history</span>
              <span className="text-sm font-medium">历史记录</span>
            </a>
            <div className="mt-8 px-2">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">最近会话</h3>
                <div className="flex flex-col gap-1">
                    <div className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium truncate w-full border border-primary/20 cursor-pointer">
                        电池热管理系统
                    </div>
                    <div className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm truncate w-full transition-colors cursor-pointer">
                        无人机螺旋桨降噪
                    </div>
                    <div className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm truncate w-full transition-colors cursor-pointer">
                        量子加密密钥分发
                    </div>
                     <div className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm truncate w-full transition-colors cursor-pointer">
                        水培传感器阵列
                    </div>
                </div>
            </div>
             <div className="mt-auto p-2">
                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2.5 px-4 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-primary/30">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    <span>新建会话</span>
                </button>
            </div>
           </>
        )}

        {variant === 'draft' && (
             <>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <span className="material-symbols-outlined text-[22px]">dashboard</span>
              <span className="text-sm font-medium">仪表盘</span>
            </Link>
             <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium transition-colors group"
            >
              <span className="material-symbols-outlined text-[22px] icon-filled">description</span>
              <span className="text-sm">当前草稿</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <span className="material-symbols-outlined text-[22px]">folder_open</span>
              <span className="text-sm font-medium">知识库</span>
            </a>
            <Link
              to="/settings"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <span className="material-symbols-outlined text-[22px]">settings</span>
              <span className="text-sm font-medium">设置</span>
            </Link>
           </>
        )}

        {variant === 'main' && (
          <Link
            to="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 transition-colors group mt-auto"
          >
            <span className="material-symbols-outlined transition-colors">logout</span>
            <span className="text-sm font-medium transition-colors">退出登录</span>
          </Link>
        )}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
          <div
            className="size-9 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-slate-700"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJ-_XYYDrqs4UI7asl_Q8bKBpd9JAdWt7vbNmCUcwEbBfUObM2emqrcfokorcBRO21bZ74pD9VTWcSvSN80op0TNQqK6g48BlDeF6HvqgdteeuWW7fsDj1U4pkOi4Re0i2qejLZd0H7iBDxYzcQ61efO1UOC_K5UjWSqLo6hRJb5-fMTPTAogSEIyj-vwRRtTUzJmoK4Zcgl-L9gZcnyyeYbugQP74nV7Ga-GvA4N4kYY6q5sZ3oB1e3h5rxMfPhBeHOO8S8_BCAg")',
            }}
          ></div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Alex Morgan</p>
            <p className="text-xs text-slate-500 truncate">alex.m@patentai.com</p>
          </div>
          <span className="material-symbols-outlined ml-auto text-slate-400 text-[20px]">
            more_vert
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;