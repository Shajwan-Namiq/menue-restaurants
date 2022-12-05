import React, { useState } from "react";

const Categories = ({ categories, filterItems }) => {
  const [active, setActive] = useState("all");

  return (
    <div>
      <nav className="flex justify-center space-x-1 lg:space-x-4 mt-10 ">
        {categories.map((category, index) => {
          return (
            <div className="lg:uppercase outline-none focus:shadow-outline font-bold px-3 py-2 text-[#344e41] ">
              <button
                type="button"
                className={`job-btn 
                 ${active === category ? "active-btn" : ""}
                `}
                key={index}
                onClick={() => {
                  filterItems(category);
                  setActive(category);
                }}
              >
                {category}
              </button>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Categories;
