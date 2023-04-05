import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [inputValue, setInputValue] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      navigate("/todo");
    }
  });

  const signinAPI = () => {
    fetch("https://www.pre-onboarding-selection-task.shop/auth/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputValue.userEmail,
        password: inputValue.userPassword,
      }),
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else if (response.status === 404) {
          alert("해당 사용자가 존재하지 않습니다.");
        } else if (response.status === 401) {
          alert("비밀번호가 일치하지 않습니다.");
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        localStorage.setItem("TOKEN", data.access_token);
        navigate("/todo");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex items-start justify-center w-full h-screen bg-green-400">
      <div className="flex flex-col justify-center">
        <div className="m-20 text-4xl font-bold">Signin</div>
        <div className="flex justify-center w-full mb-8">
          서비스 이용을 위해 로그인 해 주세요!
        </div>
        <label>
          <div className="flex flex-row items-center justify-between m-4">
            <p>이메일 : </p>
            <input
              type="email"
              name="userEmail"
              className="px-4 py-1 rounded"
              onChange={handleInput}
              placeholder="random@email.com"
              data-testid="email-input"
            />
          </div>
          <div className="flex flex-row items-center justify-between m-4">
            <p>비밀번호 : </p>
            <input
              type="password"
              name="userPassword"
              className="px-4 py-1 ml-2 rounded"
              onChange={handleInput}
              placeholder="8자리 이상 입력해주세요"
              data-testid="password-input"
            />
          </div>
          <div className="flex justify-center w-full">
            <button
              data-testid="signin-button"
              className="p-2 m-4 font-bold bg-blue-500 rounded"
              onClick={() => signinAPI()}
            >
              로그인
            </button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Signin;
