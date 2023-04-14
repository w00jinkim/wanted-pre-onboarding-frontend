import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    userEmail: "",
    userPassword: "",
  });

  const navigate = useNavigate();

  const validationCheck =
    inputValue.userEmail.includes("@") && inputValue.userPassword.length >= 8;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const signupAPI = () => {
    fetch("https://www.pre-onboarding-selection-task.shop/auth/signup", {
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
          alert("회원가입이 완료되었습니다. 로그인 해주세요.");
          navigate("/signin");
        } else {
          alert("중복된 이메일이거나 에러 확인이 필요합니다");
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      navigate("/todo");
    }
  });

  return (
    <div className="flex items-start justify-center w-full h-screen bg-yellow-50">
      <div className="flex flex-col justify-center">
        <h1 className="my-20 text-4xl font-bold">Will's Quick Checklist</h1>
        <div className="flex justify-center">
          <h2 className="mb-20 text-3xl font-bold">Signup</h2>
        </div>
        <div className="flex justify-center w-full mb-8">
          서비스 이용을 위해 회원가입 해 주세요!
        </div>
        <label>
          <div className="flex flex-row items-center justify-between m-4">
            <p className="font-bold">이메일 : </p>
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
            <p className="font-bold">비밀번호 : </p>
            <form>
              <input
                type="password"
                name="userPassword"
                className="px-4 py-1 ml-2 rounded"
                onChange={handleInput}
                placeholder="8자리 이상 입력해주세요"
                data-testid="password-input"
                autoComplete="off"
              />
            </form>
          </div>
          <div className="flex justify-center w-full">
            <button
              disabled={validationCheck ? false : true}
              data-testid="signup-button"
              className="p-2 m-4 font-bold bg-blue-500 rounded hover:bg-blue-700 disabled:bg-blue-200 disabled:text-gray-600"
              onClick={() => signupAPI()}
            >
              회원가입
            </button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Signup;
