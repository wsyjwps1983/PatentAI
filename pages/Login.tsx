import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col tech-bg overflow-x-hidden transition-colors duration-300">
      <div className="layout-container flex h-full grow flex-col items-center justify-center p-4 sm:p-8">
        <div className="relative w-full max-w-[480px] rounded-2xl bg-white dark:bg-[#1a1f29] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 p-8 sm:p-10 flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-500">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-primary/10 rounded-2xl p-3 mb-1">
              <span className="material-symbols-outlined text-primary text-[40px]">token</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">
                PatentAI
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
                智能创新，精准保护
              </p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-slate-900 dark:text-white text-xl font-bold">登录您的工作台</h2>
          </div>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleLogin}>
            <label className="flex flex-col gap-1.5 w-full">
              <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                用户名 / 工作邮箱
              </span>
              <input
                className="flex w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#252b36] px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-sm font-medium"
                placeholder="name@company.com"
                type="email"
                defaultValue="alex.m@patentai.com"
              />
            </label>
            <label className="flex flex-col gap-1.5 w-full">
              <div className="flex justify-between items-center">
                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  密码
                </span>
                <a
                  className="text-primary hover:text-blue-700 dark:hover:text-blue-400 text-xs font-semibold hover:underline"
                  href="#"
                >
                  忘记密码？
                </a>
              </div>
              <div className="relative flex w-full items-center">
                <input
                  className="flex w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#252b36] pl-4 pr-10 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-sm font-medium"
                  type="password"
                  defaultValue="password"
                />
                <button
                  className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex items-center justify-center"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                </button>
              </div>
            </label>
            <button className="mt-2 w-full rounded-lg bg-primary hover:bg-blue-700 text-white font-bold py-3.5 px-4 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98]">
              登录
            </button>
          </form>
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 dark:text-slate-500 text-xs font-semibold uppercase tracking-wider">
              或其他方式登录
            </span>
            <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          </div>
          <div className="flex flex-col gap-3">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#252b36] p-3 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-[#2f3642] transition-colors">
              <img
                alt="Google Logo"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfv5qFj0Dp9dF6ubi-Qem0Gy_0nPYLRUU3JLjN2O9xYk_t1U0WS7nbStD1SSyptQjob9aUaIwPp5uuIf7ZWPt7s7c1GsN-26MPGm1pI4Vq9tsRIOydoB3RpQUi0WhXjZZmPdql9jwjby7DP2F5I6rHcBLf-XzubujjTQ5W_c_Nd_jLrNjQFNtAuqXeKIo0XAv0ndd2fVa1vxMtuuJooDh-Uo-ls6jetw9W2TUtSPqu250E4U2pfRvGWWPbBobkVfQvLyhrEfAZewY"
              />
              <span className="text-sm">使用 Google 继续</span>
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#252b36] p-3 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-[#2f3642] transition-colors">
              <img
                alt="Microsoft Logo"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVK1y0w0r_pAIvtuCJjxDlvJ3HfI0Rk7Cd5Cgj5KzbHUlQEbyLv1w-uW521onJtUN5qoBpaOVUf3jrKu0relnmWFpVeSjvLoOjQnHmoYY40Qjxtr7JhgjPEAdBc2tDmpgepb4f15ZZiJ7TfMGvhjWX2LSS6BcHs-vxJXI-B0EP8oqqoj7V7CZqSXPMfl8rdNUxS29JIUn-HIgrJOSUUhEL6moC0YMLV5kfY_i7W6lUVZWB3ztnCZoI9BZR9oE6mUCIywL1i7flAFA"
              />
              <span className="text-sm">使用 Microsoft 继续</span>
            </button>
          </div>
          <div className="text-center pt-2">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              还没有账号？
              <a className="text-primary font-bold hover:underline ml-1" href="#">
                立即注册
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
            <p className="text-slate-400 dark:text-slate-600 text-xs">
                © 2024 PatentAI Inc. 保留所有权利。<br/>
                <a className="hover:text-slate-500 transition-colors" href="#">隐私政策</a> • <a className="hover:text-slate-500 transition-colors" href="#">服务条款</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;