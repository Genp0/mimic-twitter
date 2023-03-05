import { useRef, useState } from "react";
import BottomBar from "../components/BottomBar";
import HashTag from "../components/Icon/HashTag";
import SettingIcon from "../components/Icon/SettingIcon";
import Modal from "../components/Modal";
import tw from "tailwind-styled-components";
import TButton from "../components/Button/TButton";
import { setUsername } from '../store/feature/loginSlice'
import { useDispatch, useSelector } from "react-redux";
import { showMessage } from "../utils/tools";
import LoginForm from "../components/LoginForm";
import router from "../router";
import { useRoutes, Route, Outlet } from "react-router-dom";

const BasicDiv = tw.div`
relative text-lg  text-[#526471] border-[#cfdade] text-left p-2 leading-[40px]  m-auto  w-[298px]  h-[55px]  border-[.0625rem]  box-border  rounded-md  duration-300
 `;

const MyDiv = tw(BasicDiv)`
 ${({ $show }) =>
    $show
      ? "border-[#009fed] text-sm text-left duration-300 text-[#009fed] "
      : ""} 
 `;
const MyInput = tw.input`
  flex
  pl-1
  w-[90%]
  h-7
  outline-none
  ${({ $show }) => ($show ? "block" : "hidden")}
  absolute 
  bottom-0
  duration-300
text-black
`;

const MainLayout = () => {
  const { username, name, password, isLoggedIn } = useSelector(
    (state) => state.userLogin
  );
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [isShowInput, setIsShowInput] = useState(false);
  const [isShowLoginForm, setIsShowLoginForm] = useState(false);
  const inputRef = useRef();

  const hanldeClickInputContainer = async (e) => {
    await setIsShowInput(true);
    inputRef.current.focus();
  };

  const handleUsernameChange = e => {
    dispatch(setUsername(e.target.value));
  }

  const handleClickNextStep = e => {
    e.preventDefault()
    if (username == "") {
      showMessage({ color: 'bg-[#009fed]', show: true, duration: 2000, message: '抱歉，我们无法找到你的账号。', position: 'fixed  bottom-20 left-1/2 transform -translate-x-1/2', width: "w-[18.75rem]" })
    } else {
      setIsShowLoginForm(true)
    }
  }

  return (
    <div className="h-screen flex flex-row">
      {/* 左 */}
      <div className="hideen md:flex md:flex-[0.6] md:justify-end md:mr-10 lg:justify-start lg:ml-10 ">
        <div className="hidden md:flex md:flex-col md:w-[14%]  md:h-[25%]  md:justify-around">
          <i className="fab fa-twitter text-[#009fed] text-5xl" />
          <HashTag displaySize="md" />
          <SettingIcon displaySize="md" />
        </div>
        <div className="hidden lg:flex lg:flex-col lg:w-[30%] lg:h-[25%]  lg:justify-around">
          <div className="hidden lg:block lg:font-bold lg:text-xl  lg:w-[2.5rem] lg:h-[1.5rem]  lg:ml-6"></div>
          <div className="hidden lg:block lg:font-bold lg:text-xl  lg:w-[2.5rem] lg:h-[1.5rem]  lg:ml-6">
            探索
          </div>
          <div className="hidden lg:block lg:font-bold lg:text-xl lg:w-[2.5rem] lg:h-[1.5rem] lg:ml-6">
            设置
          </div>
        </div>
      </div>
      {/* 中 */}
      <div className="flex-[1.5] border-[.0625rem] shadow-sm flex flex-col items-center">
        {/* 搜索栏 */}
        <div className="w-full  mt-2 flex h-12  justify-around">
          <div className=" w-[80%] flex rounded-3xl overflow-hidden hover:ring-2 hover:ring-[#009fed] duration-300 ">
            <div className="w-12 flex flex-row justify-center items-center text-xl bg-[#eff3f4]  ">
              <i className="fas fa-magnifying-glass " />
            </div>
            <input
              className="bg-[#eff3f4] flex-1  outline-none "
              placeholder="搜索Twitter"
            />
          </div>
          <div className=" w-12  flex justify-center items-center p-3 hover:bg-[#e7e7e8] duration-300 rounded-3xl">
            <SettingIcon />
          </div>
        </div>
        {/* nav */}
        <div className="w-full border-1  h-16 mt-1 border-b-2 border-[#e4e7eb]">
          <ul className=" flex flex-row w-full h-full items-center space-x-2 justify-around ">
            <li className="h-full font-bold text-[#526471] flex-1 flex flex-col justify-center items-center hover:bg-[#e7e7e8] duration-300">
              为你推荐
            </li>
            <li className="h-full font-bold text-[#526471] flex-1 flex flex-col justify-center items-center hover:bg-[#e7e7e8] duration-300">
              当前趋势
            </li>
            <li className="h-full font-bold text-[#526471] flex-1 flex flex-col justify-center items-center hover:bg-[#e7e7e8] duration-300">
              新闻
            </li>
            <li className="h-full font-bold text-[#526471] flex-1 flex flex-col justify-center items-center hover:bg-[#e7e7e8] duration-300">
              体育
            </li>
            <li className="h-full font-bold text-[#526471] flex-1 flex flex-col justify-center items-center hover:bg-[#e7e7e8] duration-300">
              娱乐
            </li>
          </ul>
        </div>
        {/* 核心内容List */}
        <div className=" w-full h-screen   ">
          <ul className="h-96 ">
            <li className="h-28 p-4 hover:bg-[#f7f7f7]  ">
              {/* 上 */}
              <div className="w-full  flex justify-between items-center h-4  ">
                <span className="text-[#62727e] text-md">娱乐 趋势</span>
                <div className=" h-10 w-10 text-center leading-10 rounded-3xl hover:bg-[#e4eff7]">
                  <i className="fas fa-ellipsis hover:text-[#009fed]"></i>
                </div>
              </div>
              {/* 中 */}
              <div className="font-bold text-xl mt-2">神田沙也加さん</div>
              {/* 下 */}
              <div className="mt-2">
                趋势
                <a className="text-[#009fed]" href="#">
                  硬膜外血腫
                </a>
                ,
                <a className="text-[#009fed]" href="#">
                  黒崎真音さん
                </a>
              </div>
            </li>
            <li className="h-28 p-4 hover:bg-[#f7f7f7]  ">
              {/* 上 */}
              <div className="w-full  flex justify-between items-center h-4  ">
                <span className="text-[#62727e] text-md">娱乐 趋势</span>
                <div className=" h-10 w-10 text-center leading-10 rounded-3xl hover:bg-[#e4eff7]">
                  <i className="fas fa-ellipsis hover:text-[#009fed]"></i>
                </div>
              </div>
              {/* 中 */}
              <div className="font-bold text-xl mt-2">神田沙也加さん</div>
              {/* 下 */}
              <div className="mt-2">
                趋势
                <a className="text-[#009fed]" href="#">
                  硬膜外血腫
                </a>
                ,
                <a className="text-[#009fed]" href="#">
                  黒崎真音さん
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* 右 */}
      <div className="hidden lg:flex-1 lg:flex lg:flex-col items-center space-x-2">
        {/* title和desc */}
        <div className="w-[21.75rem] border-2 border-[#eff3f4] mt-4 rounded-xl p-3">
          <div>
            <span className="font-bold text-xl">初到Twitter?</span>
            <br />
            <span className="text-[#526471]">
              立即注册，获取你自己的个性化时间线！
            </span>
            <div className="text-lg ring-2 ring-[#dadce1]  text-center h-10 leading-10 rounded-3xl mt-4 mb-2 cursor-pointer hover:bg-[#f8faff]">
              <i
                className="fab fa-google fa-3x text-lg"
                style={{
                  background:
                    "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }} />
              &nbsp; 使用 Google 账号注册
            </div>
            <div className="text-lg ring-2 ring-[#dadce1]  text-center h-10 leading-10 rounded-3xl mt-4 mb-2 cursor-pointer font-bold hover:bg-[#f8faff]">
              <i className="fab fa-apple text-2xl align-baseline" />
              &nbsp;使用Apple注册
            </div>
            <div className=" text-lg ring-2 ring-[#dadce1]  text-center h-10 leading-10 rounded-3xl mt-4 mb-2 cursor-pointer font-bold  hover:bg-[#f8faff]">
              创建账号
            </div>
            <div className=" text-[#526471] mt-4 ">
              注册即表示同意
              <a href="#" className="text-[#8ecaf6] hover:underline">
                服务条款
              </a>
              及
              <a href="#" className="text-[#8ecaf6] hover:underline">
                隐私政策
              </a>
              ，其中包括
              <a href="#" className="text-[#8ecaf6] hover:underline">
                Cookie 使用条款
              </a>
            </div>
          </div>
        </div>
        <div className="w-[21.75rem] mt-2 text-[#526471] text-sm ">
          <span className="hover:underline mr-2">服务条款</span>
          <span className="hover:underline mr-2">隐私政策</span>
          <span className="hover:underline mr-2">Cookie 政策</span>
          <span className="hover:underline mr-2">辅助功能</span>
          <span className="hover:underline mr-2">广告信息</span>
          <span className="hover:underline mr-2">更多</span>
          <span>...</span>
          <span>© 2023 Twitter,Inc.</span>
        </div>
      </div>
      <BottomBar onHandleClick={setShow} />
      <Modal show={show} onHanldeShow={setShow} title="测试">
        {isShowLoginForm ? <LoginForm username={username} /> : <div className=" h-[85%] text-center">
          <span className="text-4xl font-bold">登录Twitter</span>
          <div className="text-base ring-1 ring-[#dadce1]  text-center h-10 leading-10 rounded-3xl mt-4 mb-2 cursor-pointer hover:bg-[#f8faff] w-[55%] relative left-[50%] translate-x-[-50%]">
            <i
              className="fab fa-google fa-3x text-lg"
              style={{
                background:
                  "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            ></i>
            &nbsp; 使用 Google 账号登录
          </div>
          <div className="text-base ring-1 ring-[#dadce1]  text-center h-10 leading-10 rounded-3xl mt-4 mb-2 cursor-pointer font-bold hover:bg-[#f8faff] w-[55%] relative left-[50%] translate-x-[-50%]">
            <i className="fab fa-apple text-2xl align-baseline" />
            &nbsp; &nbsp;使用Apple登录
          </div>
          {/* 分割线 */}
          <div className=" w-[50%] relative left-[50%] translate-x-[-50%]">
            <div className="h-[50%] w-[45%] border-b-2 border-[#cfdade] absolute"></div>
            或
            <div className="h-[50%] w-[45%] border-b-2 border-[#cfdade] absolute top-0 right-0"></div>
          </div>
          <MyDiv $show={isShowInput} onClick={hanldeClickInputContainer}>
            手机号码,邮件地址或用户名
            <MyInput
              onChange={handleUsernameChange}
              $show={isShowInput}
              onBlur={() => setIsShowInput(false)}
              ref={inputRef}
              value={username}

            />
          </MyDiv>

          <TButton className="bg-[#090909] text-white ring-1 ring-black mt-8 hover:bg-[#272c30]" onClick={handleClickNextStep}>
            下一步
          </TButton>

          <TButton className="font-bold ring-1 ring-[#cfdade] mt-4 hover:bg-[#e7e7e8]" >
            忘记密码?
          </TButton>

          <div className="mt-14  w-[300px] m-auto text-left text-sm "> 还没有账号?<span className="text-[#009fed] ml-2"><a href="#">注册</a></span></div>
        </div>}

      </Modal>
      <Outlet  />
    </div>
  );
};

export default MainLayout;
