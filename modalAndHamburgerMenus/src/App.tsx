import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [modal, setModal] = useState(false);
  const [hamburgermenu, setHamburgermenu] = useState(false);

  return (
    <>
      <div
        className={`size-screen h-screen w-screen  relative flex flex-col space-y-10 m-auto justify-center items-center ${
          modal ? `bg-gray-400` : ""
        }`}
        onClick={() => modal && setModal(!modal)}
      >
        <div
          className="space-y-1 flex z-10  flex-col items-center justify-center"
          onClick={() => setHamburgermenu(!hamburgermenu)}
        >
          <span
            className={`block w-10 border border-black transition-all ${
              hamburgermenu ? `rotate-45 translate-y-1` : "block"
            }`}
          ></span>
          <span
            className={`block w-10 border border-black  ${hamburgermenu ? `hidden` : "block"}`}
          ></span>
          <span
            className={`block w-10 border border-black  transition-all ${
              hamburgermenu ? `rotate-[-45deg]` : "block"
            }`}
          ></span>
        </div>
        <div className="block z-0" onClick={() => setModal(!modal)}>
          modal1
        </div>

        {modal ? (
          <div className="flex justify-center items-center pointer-events-auto border transition ease-in-out duration-700 z-20 fixed size-36 bg-yellow-200">
            <span>modal opened</span>
          </div>
        ) : (
          <div className="opacity-0 pointer-events-none" onClick={() => setModal(!modal)}></div>
        )}

        <div
          className={`absolute  size-full transition-all duration-700 bg-green-50 ${
            hamburgermenu ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={() => setHamburgermenu(!hamburgermenu)}
        >
          hi
        </div>
      </div>
    </>
  );
}

export default App;
