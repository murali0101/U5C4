import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {addUserM} from "./Redux/actions"
import {addOrderM} from "./Redux/actions"
function App() {
  const logM = useSelector((store) => store.isLoggedIn);
  var dispatch = useDispatch();
  useEffect(() => {
    getDataM(dispatch);
  }, []);

  async function getDataM(dispatch) {
    let data = await fetch("http://localhost:8080/users");
    let res = await data.json();
    // console.log("res:", res);
    dispatch(addUserM(res));
    let data1 = await fetch("http://localhost:8080/orders");
    let res1 = await data1.json();
    // console.log("res:", res);
    dispatch(addOrderM(res1));
  }
  console.log("logM:", logM);
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}

        {logM ? (
          <Link className="nav-logout" to="/" onClick={() => {
            dispatch(toggleisAuth(false))
          }}>
            Logout
          </Link>
        ) : (
          <Link className="nav-login" to="/login">
            Login
          </Link>
        )}
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Logout />}></Route>
        <Route path="/neworder" element={<NewOrder />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </div>
  );
}

export default App;
