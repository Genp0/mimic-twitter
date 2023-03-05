import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setName as setNameAc, setPassword as setPasswordAc, setUsername as setUsernameAc } from '../store/feature/loginSlice';
import { showMessage, storage } from '../utils/tools';

const TwitterRegister = ({ className }) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const onClose = () => {
    navigate(-1);
  };

  const onRegister = (event) => {
    event.preventDefault();
    // 使用获取到的表单信息执行相应操作

    if (!username || !password  || !name) {
      showMessage({ color: 'bg-[#009fed]', show: true, duration: 2000, message: '缺少关键信息。', position: 'fixed  bottom-20 left-1/2 transform -translate-x-1/2', width: "w-[18.75rem]" })
      return;
    } else if (storage.userExists("users",username)) {
      console.log("~~",storage.userExists("users",username))
      showMessage({ color: 'bg-[#009fed]', show: true, duration: 2000, message: '用户已存在。', position: 'fixed  bottom-20 left-1/2 transform -translate-x-1/2', width: "w-[18.75rem]" })
      return
    }

    
    dispatch(setNameAc(name))
    dispatch(setUsernameAc(username))
    dispatch(setPasswordAc(password))
    storage.addUser("users", username, name, password)
  };

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
            onClick={onClose}
          >
            ✖️
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">注册推特账号</h1>
        <form className="w-full" onSubmit={onRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              用户名
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="请输入用户名"
              value={username}
              onChange={onUsernameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              名字
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="请输昵称"
              value={name}
              onChange={onNameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              密码
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              注册
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              已有账号？登录
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TwitterRegister;
