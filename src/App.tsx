import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [item, setItem] = useState<any>([]);
  const Add = () => {
    if (!count) return;
    item.push(count);
    console.log(item);
    setItem([...item]);
    setCount("");
  };
  const Delete = (i: any) => {
    //splice remove value first argument index and second argument element remove
    item.splice(i, 1);
    setItem([...item]);
  };

  const DeleteAll = (i: any) => {
    item.splice(i);
    setItem([...item]);
  };
  const Update = (i: any) => {
    const edit = prompt("Enter Your value");
    item[i] = edit;
    setItem([...item]);
  };
  return (
    <>
    <h1 className="pb-4 text-white font-bold">Todo App</h1>
      <div>
        <input
          className="p-2 border border-gray-900 border-[2px] text-gray-600"
          type="text"
          placeholder="Enter your value"
          onChange={(e) => {
            setCount(e.target.value);
          }}
          value={count}
          required
        />
        <button
          className="bg-blue-600 text-white ml-2 mr-2 p-3"
          onClick={() => {
            Add();
          }}
        >
          Add
        </button>
        <button
          className="bg-blue-600 text-white p-3"
          onClick={(i) => {
            DeleteAll(i);
          }}
        >
          DeleteAll
        </button>
      </div>
      <div className="mt-5 ">
        {item.map((value: any, index: any) => {
          return (
            <div key={index} className="flex justify-between mt-2 bg-gray-700 pt-2 pb-2 pl-2 pr-2">
              <div className="flex justify-start items-center">
                <h2 className="text-white text-2xl pl-2 ">{value}</h2>
              </div>
              <div>
                <button
                  className="bg-red-500 text-white mr-2"
                  onClick={() => {
                    Update(index);
                  }}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white"
                  onClick={(i) => Delete(i)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
