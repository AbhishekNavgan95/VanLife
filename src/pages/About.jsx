import React from "react";

const About = () => {
  return (
    <div className="">
      <div>
        <img
          className="w-full md:h-[50vh] object-cover"
          src="https://images.unsplash.com/photo-1591706515036-cb0f48dc5e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZhbnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="">
          <div>
            <h1 className="text-5xl font-bold lg:w-[70%] my-10 ">
              Dont squeeze in a sedan when you could relax in a van.
            </h1>
          </div>
          <div className="text-xl flex flex-col gap-5 my-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              rerum distinctio eius saepe delectus temporibus quod possimus
              unde! Nobis quos, magnam cumque aliquam maxime perspiciatis culpa
              quae nisi, ipsam omnis iure. Eius reprehenderit quasi accusamus
              esse enim id aut nihil asperiores iure a voluptate quaerat dolor
              vitae molestiae, in possimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              itaque earum pariatur voluptatem rem doloremque commodi, expedita
              quibusdam consequuntur.
            </p>
          </div>
        </div>
        <div className="w-full rounded-lg border p-8 flex flex-col items-start gap-5 bg-orange-100 my-10">
          <div>
            <h2 className="text-2xl font-semibold">
              Your destination is waiting Your van is ready
            </h2>
          </div>
          <button className="border-2 border-white py-2 px-8 rounded-lg text-white hover:bg-orange-300 bg-orange-400 transition-color duration-100">
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
