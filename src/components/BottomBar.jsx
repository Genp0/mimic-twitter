const BottomBar = (props) => {
  const { onHandleClick } = props;
  return (
    <div className="w-full h-[4.5rem] fixed bottom-0 bg-[#009eeb] flex flex-row">
      {/* 左边 */}
      {/* 砖头 */}
      <div className="hidden lg:block lg:flex-[2.4] "></div>
      {/* 右边 */}
      <div className=" flex-1 lg:flex-[7.6] text-[#ffffff]">
        <div className="h-full flex flex-row justify-between">
          {/* 字 */}
          <div className="hidden h-full md:flex md:flex-col md:justify-center">
            <span className=" font-bold text-2xl">新鲜事一网打尽</span>
            <span className="text-sm">在 Twitter 上的人会第一时间知道。</span>
          </div>
          {/* 按钮 */}
          <div className="flex-1 md:flex-[0.4] h-full flex flex-row justify-center p-5 gap-3 ">
            <button onClick={()=>onHandleClick(true)}  className="flex-1 font-bold md:text-sm md:flex-[0.2] ring-1 h-8  rounded-3xl ring-[#f0f0f0] hover:bg-[#34a7ee]">
              登录
            </button>
            <button className="flex-1 font-bold  md:text-sm md:flex-[0.2] ring-1 h-8  rounded-3xl ring-[#f0f0f0] bg-white text-black hover:bg-[#eff3f4]">
              注册
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
