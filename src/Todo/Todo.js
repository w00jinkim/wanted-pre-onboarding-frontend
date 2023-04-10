import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const [todolistValue, setTodolistValue] = useState([]);
  const [todoState, setTodoState] = useState(false);
  const [toModifyText, setToModifyText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [editMode, setEditMode] = useState({});

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
      .then((data) => {
        // Update todoState after successfully creating a todo
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
      .then((data) => {
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
    <div>
      <div className="flex flex-row ml-10 mt-14">
        <input
          type="text"
          className="m-5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          data-testid="new-todo-input"
          name="todo"
          onChange={handleInput}
        />
        <button
          data-testid="new-todo-add-button"
          onClick={async () => {
            await createtodoList();
            handleCreateTodoClick();
          }}
        >
          추가
        </button>
        <button onClick={doLogout}>Logout</button>
      </div>{" "}
      <ul>
        {todolistValue?.map((item) => (
          <li key={item?.id}>
            <label>
              <input
                type="checkbox"
                name="isCompleted"
                onChange={handleChecked}
                checked={item.isCompleted}
              />
              <span>{item?.todo}</span>
            </label>
            <button
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
              data-testid="delete-button"
              onClick={() => {
                deletetodoList(item?.id);
                handleCreateTodoClick();
              }}
            >
              삭제
            </button>
            {editMode[item.id] && (
              <div>
                <input
                  type="checkbox"
                  name="isCompleted"
                  checked={isChecked}
                  onChange={handleChecked}
                />
                <input
                  type="text"
                  name="todo"
                  value={toModifyText}
                  onChange={handleInput}
                />
                <button
                  onClick={() => {
                    modifytodoList(item.id);
                    setEditMode(false);
                  }}
                >
                  제출
                </button>
                <button onClick={() => setEditMode(false)}>취소</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
