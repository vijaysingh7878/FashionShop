import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 p-[29px] mt-[9px]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          {/* Header Section */}
          <h2 className="text-2xl font-bold text-center mb-6">1</h2>
          <h1 className="text-3xl font-bold text-center mb-6">
            Welcome to My Website
          </h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            "Build Beautiful, Fast, and Scalable Web Applications with Tailwind
            CSS & React"
          </p>

          {/* Introduction Section */}
          {/* <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">About Us</h3>
          <p className="text-lg text-gray-700 text-center">
            We are a passionate team of developers focused on delivering high-quality web applications. Our approach combines design and functionality to create seamless, interactive, and performant user experiences.
          </p>
        </div> */}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Responsive Design</h4>
              <p className="text-gray-600">
                Our applications are fully responsive, ensuring a smooth
                experience across devices and screen sizes.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Fast Performance</h4>
              <p className="text-gray-600">
                Optimized for speed, our apps deliver fast loading times and
                smooth interactions, even with large datasets.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Scalability</h4>
              <p className="text-gray-600">
                Designed with scalability in mind, our applications grow with
                your business, allowing for easy maintenance and upgrades.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Easy Integration</h4>
              <p className="text-gray-600">
                Easily integrate with other services and tools to enhance
                functionality and streamline your workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
