import React from 'react'

const Categories = ({ filterItems }) => {

  return (
    <div>
      <nav class="flex justify-center space-x-4">
        <button
          onClick={() => filterItems("all")}
          class="font-med px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          all
        </button>
        <button
          onClick={() => filterItems("breakfast")}
          class="font-med px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          breakfast
        </button>

        <button
          onClick={() => filterItems("lunch")}
          class="font-med px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          lunch
        </button>

        <button
          onClick={() => filterItems("shakes")}
          class="font-med px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          shakes
        </button>
      </nav>
    </div>
  ); 
  
};

export default Categories