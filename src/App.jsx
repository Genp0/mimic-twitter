import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
