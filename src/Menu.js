import React from 'react'




const Menu = ({ items }) => {

  return (
    <div>
      {items.map((menuItem) => {
    const { id, title, img, desc, price } = menuItem;

  return (
    <>
      <div key={id}>
        <section class="bg-white border-b-2 mx-4  ">
          <div class="container px-6 py-5 mx-auto">
            <div class="grid grid-cols-1 gap-8 mt-8 md:mt-10 md:grid-cols-2">
              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={img}
                  alt={title}
                />

                <div class="flex flex-col py-6 lg:mx-6">
                 
                  <div className='flex justify-between lg:border-b-2'>
                    <div class="text-xl font-semibold text-green-600   ">
                      {title}
                    </div>

                    <div class="text-xl font-semibold text-green-600   ">
                      ${price}
                    </div>
                  </div>

                  <div class="mt-2 text-sm text-gray-700 ">{desc}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );


      })}
    </div>
  )
}

export default Menu