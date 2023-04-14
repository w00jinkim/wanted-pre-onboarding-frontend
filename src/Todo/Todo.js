import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const [todolistValue, setTodolistValue] = useState([]);
  const [todoState, setTodoState] = useState(false);
  const [toModifyText, setToModifyText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    if (event) {
      const { value } = event.target;
      setToModifyText(value);
    }
  };

  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };

  const createtodoList = () => {
    fetch("https://www.pre-onboarding-selection-task.shop/todos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: toModifyText,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setTodoState((prev) => !prev);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deletetodoList = (e) => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${e}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
      },
    })
      .then((res) => res)
      .then((data) => {
        setTodoState((prev) => !prev);
      });
  };

  const modifytodoList = (id) => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: toModifyText,
        isCompleted: isChecked,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setTodoState((prev) => !prev);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const modifyCheckList = (id, isChecked) => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: todolistValue.find((item) => item.id === id)?.todo,
        isCompleted: isChecked,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setTodoState((prev) => !prev);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const doLogout = () => {
    localStorage.removeItem("TOKEN");
    navigate("/signin");
  };

  useEffect(() => {
    if (!localStorage.getItem("TOKEN")) {
      navigate("/signin");
    } else {
      fetch("https://www.pre-onboarding-selection-task.shop/todos", {
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setTodolistValue(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [navigate, todoState]);

  const handleCreateTodoClick = () => {
    setTodoState((prev) => !prev);
  };

  return (
    <div className="h-screen bg-black">
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-white mt-14">
          Will's Quick Checklist
        </h1>
      </div>
      <div className="w-full">
        <button
          className="absolute p-2 font-bold bg-blue-600 rounded hover:bg-blue-800 right-10 top-14"
          onClick={doLogout}
        >
          로그아웃
        </button>
      </div>
      <div className="flex flex-row items-center justify-center mt-10 ml-10">
        <input
          type="text"
          className="w-1/3 p-1 m-5 text-lg rounded-sm bg-yellow-50"
          data-testid="new-todo-input"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyUp={handleInput}
          placeholder="체크리스트 추가!"
          value={inputValue}
          autoFocus={true}
        />
        <button
          className="p-1 m-1 rounded hover:bg-white hover:font-bold bg-yellow-50 disabled:text-gray-500 disabled:hover:font-normal disabled:hover:bg-white"
          data-testid="new-todo-add-button"
          onClick={async () => {
            await createtodoList();
            handleCreateTodoClick();
            setInputValue("");
          }}
          disabled={inputValue ? false : true}
        >
          추가
        </button>
      </div>
      <ul className="flex flex-col items-center justify-center pl-5 mt-10 space-y-3">
        {todolistValue?.map((item) => (
          <li key={item?.id} className="w-full">
            <div
              className={
                !editMode
                  ? "flex flex-row justify-center items-center w-full text-lg"
                  : "hidden"
              }
            >
              <label className="w-1/3">
                <input
                  className="m-1 text-lg accent-white"
                  type="checkbox"
                  name="isCompleted"
                  onChange={(event) => {
                    const isChecked = event.target.checked;
                    handleChecked();
                    modifyCheckList(item.id, isChecked);
                  }}
                  checked={item.isCompleted}
                />
                <span className="w-full text-yellow-50">{item?.todo}</span>
              </label>
              <button
                className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
                data-testid="modify-button"
                onClick={() => {
                  setEditMode((prevEditMode) => ({
                    ...prevEditMode,
                    [item.id]: !prevEditMode[item.id],
                  }));
                  setToModifyText(item?.todo);
                  setIsChecked(item?.isCompleted);
                }}
              >
                수정
              </button>
              <button
                className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
                data-testid="delete-button"
                onClick={() => {
                  deletetodoList(item?.id);
                  handleCreateTodoClick();
                }}
              >
                삭제
              </button>
            </div>
            {editMode[item.id] && (
              <div className="flex flex-row items-center justify-center w-full text-lg">
                <label className="w-1/3">
                  <input
                    className="accent-white"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChecked}
                  />
                  <input
                    className="w-11/12 mx-2 rounded-sm bg-yellow-50"
                    type="text"
                    value={toModifyText}
                    onChange={handleInput}
                    autoFocus={true}
                    data-testid="modify-input"
                  />
                </label>
                <button
                  className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
                  onClick={() => {
                    modifytodoList(item.id);
                    setEditMode(false);
                  }}
                  data-testid="submit-button"
                >
                  제출
                </button>
                <button
                  className="p-1 m-1 text-sm rounded hover:bg-white hover:font-bold bg-yellow-50"
                  onClick={() => setEditMode(false)}
                  data-testid="cancel-button"
                >
                  취소
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
