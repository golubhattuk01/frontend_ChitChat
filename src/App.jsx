import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "../component/Header";

export const MyContext = createContext();
function App() {
  const [isLogin, setIsLogin] = useState({
    bool: false,
    obj: {},
  });
  return (
    <MyContext.Provider value={[isLogin, setIsLogin]}>
      <Header></Header>
      <Outlet></Outlet>
    </MyContext.Provider>
  );
}

export default App;
