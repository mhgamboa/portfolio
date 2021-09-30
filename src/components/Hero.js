import React from "react";

function hero() {
  return (
    <section className="h-screen w-screen flex items-center">
      <div className="flex flex-col">
        <h1 className="text-4xl text-center font-medium">
          Hi, my name is <span>Marcus</span>. I'm a front end developer.
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-auto rounded">
          Get to Know Me
        </button>
      </div>
    </section>
  );
}

export default hero;
