import { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import axiosInstance from "../../hooks/axios";

const Login = () => {
  const [login, setLogin] = useState(false);

  const onSubmitLoginHandler = (data) => {
    console.log(data);
    axiosInstance
      .post(`/api/token/`, {
        phone_number: data.phone_number,
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
      .catch((res) => {
        console.log(res.data);
      });
  };
  const onSubmitRegisterHandler = (data) => {
    console.log(data);
    // navigate("/login  ");
    axiosInstance
      .post(`api/user/register/`, {
        phone_number: data.phone_number,
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .then(() => {
        // navigate("/login");
      })
      .catch((res) => {
        console.log(res.data);
        console.log("kir shodam");
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
                  onClick={() => setLogin(false)}
                  variant="contained"
                >
                  ثبت نام
                </Button>
              </>
            ) : (
              <>
                <div className="login_title">ثبت نام </div>
                <input
                  type="text"
                  pattern="[0]{1}[9]{1}[0-9]{8}"
                  className="login__input"
                  placeholder=". ایمیل خود را وارد کنید"
                ></input>
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
                >
                  ارسال کد
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
                <div className="login_title">ثبت نام </div>
                <input
                  type="text"
                  pattern="[0]{1}[9]{1}[0-9]{8}"
                  className="login__input"
                  placeholder=".ایمیل خود را وارد کنید"
                />
                <input
                  type="text"
                  pattern="[0]{1}[9]{1}[0-9]{8}"
                  className="login__input"
                  placeholder=".رمز عبور خود را وارد کنید  "
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
