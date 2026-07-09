import React, {lazy, Suspense, useEffect, useState} from "react"; 
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Chunking
// Code Splitting
// Dynamic Bundeling
// Lazy loading
// on demand loading
// dynamix import

const Grocery = lazy(()=> import("./components/Grocery"))


const AppLayout = () => {

  const [UserName, setUserName]= useState();

  useEffect(()=>{
    //Make an api call and send a username and password
    const data = {
      name: "Nitin Purohit"
    };
    setUserName(data.name)
  },[])

  return (
    <Provider  store={appStore}>
    <UserContext.Provider value={{loggedInUser : UserName, setUserName}}>
    <div className="app">   
      <Header />
      <Outlet />
    </div>
   </UserContext.Provider>
   </Provider>
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
        <Route path="cart" element={<Cart/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);