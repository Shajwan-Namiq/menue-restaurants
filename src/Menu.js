import React from 'react'




const Menu = ({ items }) => {

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8   container px-6 py-14 mx-auto">
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;

          return (
            <>
              <div
                key={id}
                className="bg-[#dad7cd] transform transition duration-500 hover:scale-110 "
              >
                <div className="flex">
                  <img
                    className="  transition duration-500 hover:-scale-x-90  object-cover w-36 h-36  lg:w-56 lg:h-56 rounded-lg "
                    src={img}
                    alt={title}
                  />

                  <div className="flex flex-col py-6 mx-2 lg:mx-6">
                    <div className="flex justify-between lg:border-b-2">
                      <div className="text-xl font-semibold text-green-600   ">
                        {title}
                      </div>

                      <div className="text-xl font-semibold text-green-600   ">
                        ${price}
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-gray-700 ">{desc}</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Menu