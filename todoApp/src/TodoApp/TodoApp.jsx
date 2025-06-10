import { useState } from "react";

const COLORS = ["white", "red", "yellow", "pink"];

export default function TodoApp() {
  const [curColor, setCurColor] = useState(COLORS[0]);
  const [inputText, setInputText] = useState("");

  const [todoList, setTodoList] = useState([]); // {color: string, text: string}

  const addTodo = ({ text, color }) => {
    setTodoList((prevTodoList) => [...prevTodoList, { text, color }]);
  };

  return (
    <div style={{ backgroundColor: "#0046ff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <header>
              <h1>Todo App</h1>
            </header>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="text"
                style={{ flexGrow: 1, padding: 5, backgroundColor: curColor }}
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
              />
              <button
                onClick={() => {
                  addTodo({
                    text: inputText,
                    color: curColor,
                  });
                  setInputText("");
                }}
              >
                입력
              </button>
            </div>

            <div
              style={{
                marginTop: 40,
                marginBottom: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              {COLORS.map((color, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: color,
                      borderRadius: 10,
                      width: 15,
                      height: 15,
                    }}
                    onClick={() => {
                      setCurColor(color);
                    }}
                  ></div>
                );
              })}
            </div>

            <div>
              <h2>Todo Items</h2>
              <div>
                <ul
                  style={{
                    padding: 0,
                    listStyleType: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {todoList.map((todoItem) => {
                    return (
                      <li
                        style={{
                          display: "block",
                          padding: 10,
                          backgroundColor: todoItem.color,
                          borderRadius: 5,
                        }}
                      >
                        {todoItem.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
