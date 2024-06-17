import React from "react";

function hero() {
  return (
    <section className="bg-gray-50">
      <img
        className=" mx-auto max-w-screen-xl px-15 py-20"
        src="https://cdn-icons-png.flaticon.com/256/4105/4105448.png"
      />
      <div
        className="mx-auto max-w-screen-xl px-20 
        lg: flex lg: h - screen lg: items - center "
      >
        {" "}
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Build Smart Forms{" "}
            <strong className="font-extrabold text-purple-700 sm:block">
              {" "}
              Effortlessly with AI.{" "}
            </strong>{" "}
          </h1>{" "}
          <p className="mt-4 sm:text-xl/relaxed">
            Automate your form creation process and{" "}
            <strong className="font-extrabold text-purple-700 ">
              {" "}
              save time with our intelligent AI{" "}
            </strong>{" "}
            - powered form builder.{" "}
          </p>{" "}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Start For Free{" "}
            </a>{" "}
            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium bg-black text-white shadow focus:outline-none focus:ring  hover:bg-orange-600 active:text-green-500 sm:w-auto"
              href="#"
            >
              Learn More{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default hero;
