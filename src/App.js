import "./App.css";
import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";


function App() {

 const [menueItems, setMenueItems] = useState(items); 
 const [categories ,setCategories] = useState([]);
 
 return (
   <>
     <div className="flex justify-center p-5 text-2xl font-bold">
       <p>
         Ou<span className=" border-b-2 border-emerald-600">r Me</span>nue
       </p>
     </div>

     <div>
       <Categories />
       <Menu items={menueItems}  />
     </div>
   </>
 );
}

export default App;
