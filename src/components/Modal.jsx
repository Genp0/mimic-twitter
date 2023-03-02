import React from "react";

function WithClickProp({ children, onClick }) {
  return React.Children.map(children, (child) => {
    if (typeof child === "string") {
      return child;
    }
    return React.cloneElement(child, { onClick });
  });
}

const Modal = (props) => {
  const { show, onHanldeShow, children, title } = props;
  console.log("@@", WithClickProp(title));

  return show ? (
    <main
      id="content"
      role="main"
      onClick={() => onHanldeShow(false)}
      class="w-full h-full  mx-auto p-6 fixed bg-black bg-opacity-40"
    >
      <div class="mt-7 p-2 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 h-[85%] w-[40%] fixed top-5 left-[50%] translate-x-[-50%]">
        <div className="w-full text-center flex flex-row items-center justify-center h-14 ">
          <div className="flex-1 text-left text-2xl p-2"><i className="fas fa-xmark cursor-pointer" onClick={()=>onHanldeShow(false)} /></div>
          <WithClickProp>
            <i className="fab fa-twitter text-3xl text-[#00a2eb]" />
          </WithClickProp>
          <div className="flex-1"></div>
        </div>
        {children}
      </div>
    </main>
  ) : (
    <></>
  );
};

export default Modal;
