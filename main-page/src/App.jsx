import React from "react";
import "styles/nav.css";

const Home = () => {
  return (
    <div className="bg-[#DCDEEA]">
      {/* Navbar */}
      <div id="navbar"></div>

      {/* Main Content */}
      <main>
        {/* First Section */}
        <section className="text-center py-8 relative">
          <div className="text-[#1C359A] text-sm flex justify-center w-full space-x-[290px]">
            <div>No Lines, Just Good Coffee</div>
            <div>Monday - Sunday 10:00 AM - 2:00 AM</div>
          </div>
          <div className="title">
            <div className="text-4xl sm:text-5xl font-black text-[#1C359A] mb-2">
              Brewed Fresh, Ready to Go
            </div>
            <div className="text-3xl sm:text-4xl font-black text-black">
              Anytime, Anywhere!
            </div>
          </div>
          <button className="mt-6 bg-[#1C359A] text-sm font-semibold text-white py-3 px-10 rounded-full shadow-lg hover:bg-blue-700">
            ORDER NOW
          </button>
          <div className="relative">
            <div className="absolute inset-0">
              <img src="/img/FLAVORED LATTES/SPANISH LATTE.jpg" alt="Coffee Splash" className="w-full h-auto" />
            </div>
            <div className="relative flex flex-col items-center">
              <div id="gradient-container" className="w-full bg-gradient-to-b from-brown-700 to-brown-500 rounded-t-full relative mt-48 overflow-hidden shadow-xl">
                <div className="relative flex justify-around items-center mt-20 px-10">
                  <div className="w-36 h-36 rounded-full shadow-md flex items-center justify-center">
                    <img src="/img/CLASSIC COFFEES/Cafe Vienna.jpg" alt="Food Item 1" className="w-32 h-32 rounded-full object-cover" />
                  </div>
                  <div className="w-48 h-48 rounded-full shadow-lg flex items-center justify-center">
                    <img src="/img/FLAVORED LATTES/CARAMEL LATTE ICON.jpg" alt="Drink" className="w-44 h-44 rounded-full object-cover" />
                  </div>
                  <div className="w-36 h-36 rounded-full shadow-md flex items-center justify-center">
                    <img src="/img/SMOOTHIES AND FRAPPES/Mango Tango.jpg" alt="Food Item 2" className="w-32 h-32 rounded-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-10 left-10">
              <img src="/img/coffee-beans.png" alt="Coffee Beans" className="w-16 h-auto" />
            </div>
            <div className="absolute top-10 right-10">
              <img src="/img/coffee-beans-2.png" alt="Coffee Beans" className="w-16 h-auto" />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="bg-white w-full flex flex-col justify-center items-center text-center py-6">
          <div className="text-4xl sm:text-5xl font-black text-[#1C359A]">Welcome to Yappari!</div>
          <div className="mt-4">We are YCB! Our goal is to bring a smile to your face with just one sip of our freshly brewed coffee.</div>
          <div className="flex flex-row space-x-4 mt-4">
            {[
              { name: "Cafe Vienna", price: "₱130 - ₱140", img: "/img/CLASSIC COFFEES/Cafe Vienna.jpg" },
              { name: "Pork Katsudon", price: "₱120", img: "/img/katsudon.jpg" },
              { name: "Caramel Macchiato", price: "₱125 - 135", img: "/img/CLASSIC COFFEES/Caramel Macchiato.jpg" },
              { name: "Seafood Pasta", price: "₱160", img: "/img/2022-11-21 (2).jpg" },
            ].map((item, index) => (
              <div key={index} className="w-72 bg-[#DCDEEA] flex flex-col pt-4 h-auto rounded-lg shadow-lg">
                <div className="justify-center flex items-center">
                  <img src={item.img} alt={item.name} className="w-[213px] h-48 rounded-md object-cover" />
                </div>
                <div className="bg-white rounded-md h-full w-full mt-4 p-5 flex flex-col">
                  <div className="text-[#1C359A] font-bold flex">{item.name}</div>
                  <div className="text-sm opacity-55">A delicious treat to savor.</div>
                  <div className="flex flex-row-reverse justify-between mt-auto items-center pt-4">
                    <div className="price text-sm font-semibold">{item.price}</div>
                    <button className="bg-[#DCDEEA] text-[#1C359A] text-sm font-bold py-2 px-6 rounded flex items-center gap-2">
                      <img src="/img/cart.png" alt="Add Icon" className="w-4 h-4" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-[#1C359A] text-sm font-semibold text-white py-3 px-10 rounded-full shadow-lg hover:bg-blue-700">
            More
          </button>
        </section>

        {/* Footer */}
        <div id="footer"></div>
      </main>
    </div>
  );
};

export default Home;