import React from 'react'

const Categories = ({ categories,filterItems }) => {
  return (
    <div>
      <nav className="flex justify-center space-x-1 lg:space-x-4 mt-10 ">
        {categories.map((category, index) => {
          return (
            <div className="border rounded-lg">
              <button
                type="button"
                className="lg:uppercase outline-none focus:shadow-outline  font-bold px-3 py-2 text-[#344e41] rounded-lg hover:bg-[#dad7cd] hover:text-[#1e3222]"
                key={index}
                onClick={() => filterItems(category)}
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

export default Categories