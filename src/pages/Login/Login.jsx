import { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import axiosInstance from "../../hooks/axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../store/features/auth/authSlice";

const Login = () => {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [userNew, setUserNew] = useState({
    username: "",
    password: "",
  });
  const onInfo = (data) => {
    // navigate("/login  ");
    axiosInstance
      .get(`/api/v1/accounts/get_my_info/`)
      .then((res) => {
        dispatch(getUserData(res.data));
      })
      .then((res) => {
        navigate("/");
      })
      .catch((res) => {
        console.log(res.data);
        // setError('phone_number',{type:'requr',message})
      });
  };
  const onSubmitLoginHandler = (data) => {
    console.log(data);
    axiosInstance
      .post(`/api/v1/accounts/token/`, {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "Bearer " + localStorage.getItem("access_token");

        // navigate("/dashboard/accountInfo");
        console.log(res);

        console.log(res.data);
      })
      .then(() => {
        onInfo();
        // navigate("/");
      })
      .catch((res) => {
        console.log(res.data);
      });
  };
  const onSubmitRegisterHandler = (data) => {
    console.log(data);
    // navigate("/login  ");
    axiosInstance
      .post(`/api/v1/accounts/register/`, {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        onSubmitLoginHandler(data);
      })
      .then(() => {
        // navigate("/login");
      })
      .catch((res) => {
        console.log(res.data);
        setLogin(false);

        // setError('phone_number',{type:'requr',message})
      });
  };

  return (
    <div className="Login__container">
      <div
        className="Login__register"
        style={{ backgroundColor: login ? "var(--main-color)" : "" }}
      >
        <div className="Login__register-main">
          <div className="Login__register-main-con">
            {login ? (
              <>
                <div className="login_bigTitle">حساب کاربری ندارید؟</div>
                <Button
                  sx={{
                    bgcolor: "var(--main-color)",
                    color: "var(--second-color)",
                    border: "2px solid var(--second-color)",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "12px 35px",
                    borderRadius: "25px",
                  }}
                  onClick={() => {
                    setLogin(false);
                  }}
                  variant="contained"
                >
                  ثبت نام
                </Button>
              </>
            ) : (
              <>
                <div className="login_title">ثبت نام </div>
                <div
                  style={{
                    gap: "10px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <input
                    type="text"
                    className="login__input"
                    placeholder=". ایمیل خود را وارد کنید"
                    onChange={(e) => {
                      setUserNew({ ...userNew, username: e.target.value });
                    }}
                  />
                  <input
                    type="password"
                    pattern="[0]{1}[9]{1}[0-9]{8}"
                    className="login__input"
                    placeholder=".رمز عبور خود را وارد کنید  "
                    onChange={(e) => {
                      setUserNew({ ...userNew, password: e.target.value });
                    }}
                  />
                </div>

                <Button
                  sx={{
                    bgcolor: "var(--main-color)",
                    color: "var(--second-color)",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "12px 25px",
                    borderRadius: "20px",
                  }}
                  variant="contained"
                  onClick={() => {
                    console.log(userNew);
                    onSubmitRegisterHandler(userNew);
                  }}
                >
                  ثبت نام
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className="Login__login"
        style={{ backgroundColor: login ? "" : "var(--main-color)" }}
      >
        <div className="Login__register-main">
          <div
            className="Login__register-main-con"
            style={{ height: "58%", gap: "30px" }}
          >
            {login ? (
              <>
                <div className="login_title"> ورود </div>
                <input
                  type="email"
                  pattern="[0]{1}[9]{1}[0-9]{8}"
                  className="login__input"
                  placeholder=".ایمیل خود را وارد کنید"
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                  }}
                />
                <input
                  type="password"
                  pattern="[0]{1}[9]{1}[0-9]{8}"
                  className="login__input"
                  placeholder=".رمز عبور خود را وارد کنید  "
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
                <Button
                  sx={{
                    bgcolor: "var(--main-color)",
                    color: "var(--second-color)",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "12px 25px",
                    borderRadius: "20px",
                  }}
                  variant="contained"
                  onClick={() => {
                    onSubmitLoginHandler(user);
                  }}
                >
                  ورود
                </Button>
              </>
            ) : (
              <>
                <div className="login_bigTitle">ثبت نام کرده اید؟</div>
                <Button
                  sx={{
                    bgcolor: "var(--main-color)",
                    color: "var(--second-color)",
                    border: "2px solid var(--second-color)",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "12px 35px",
                    borderRadius: "25px",
                  }}
                  onClick={() => setLogin(true)}
                  variant="contained"
                >
                  ورود
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
