import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


// Chunking
// Code Splitting
// Dynamic Bundeling
// Lazy loading
// on demand loading
// dynamix import

const Grocery = lazy(()=> import("./components/Grocery"))


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="grocery" element={
          <Suspense fallback={<h1>Loading....</h1>}>
            {<Grocery />}
            </Suspense>
          }/>
        <Route path="restaurants/:resID" element={<RestaurantMenu/>}/>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);