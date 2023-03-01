import BlueBird from "../components/Icon/BlueBird";
import HashTag from "../components/Icon/HashTag";
import SettingIcon from "../components/Icon/SettingIcon";

const MainLayout = () => (
  <div className="h-screen flex flex-row">
    {/* 左 */}
    <div className="hideen md:flex md:flex-[0.8] md:justify-end md:mr-10 lg:justify-start lg:ml-10 ">
      <div className="hidden md:flex md:flex-col md:w-[14%]  md:h-[25%]  md:justify-around">
        <i className="fab fa-twitter text-[#009fed] text-5xl" />
        <HashTag displaySize="md" />
        <SettingIcon displaySize="md" />
      </div>
      <div className="hidden lg:flex lg:flex-col lg:w-[30%] lg:h-[25%]  lg:justify-around">
        <div className="hidden lg:block lg:font-bold lg:text-xl  lg:w-[40px] lg:h-[24px]  lg:ml-6"></div>
        <div className="hidden lg:block lg:font-bold lg:text-xl  lg:w-[40px] lg:h-[24px]  lg:ml-6">
          探索
        </div>
        <div className="hidden lg:block lg:font-bold lg:text-xl lg:w-[40px] lg:h-[24px] lg:ml-6">
          设置
        </div>
      </div>
    </div>
    {/* 中 */}
    <div className="flex-[2] border-[1px] shadow-sm flex flex-col items-center">
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
              趋势{" "}
              <a className="text-[#009fed]" href="javascript::">
                硬膜外血腫
              </a>{" "}
              ,
              <a className="text-[#009fed]" href="javascript::">
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
              趋势{" "}
              <a className="text-[#009fed]" href="javascript::">
                硬膜外血腫
              </a>{" "}
              ,
              <a className="text-[#009fed]" href="javascript::">
                黒崎真音さん
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/* 右边 */}
    <div className="hidden lg:block lg:flex-1">3</div>
  </div>
);

export default MainLayout;