import React from "react";
import { RouterProvider } from 'react-router-dom';
import router from "./router";

function App() {
  return (
    <>
      <div>
        这里是app4 <br />
        react18 + vite
      </div>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
