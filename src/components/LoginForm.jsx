import React from 'react';
import { setUsername } from '../store/feature/loginSlice';

const LoginForm = ({ username, ...props }) => {
    const handleClickLogin = ()=>{
        
    }
  return (
    <form className="flex flex-col justify-center items-center h-full -translate-y-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-gray-800 text-2xl mb-2">请输入你的密码</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            用户名
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              type="text"
              value={username}
              readOnly
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            密码
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
            />
          </label>
          <div className="flex items-center justify-between">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              忘记密码
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            登录
          </button>
        </div>
        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">
            还没有账号？
          </span>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            注册
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
