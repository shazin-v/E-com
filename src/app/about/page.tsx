import React from "react";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Top Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">ABOUT US</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div>
            <img
              src="images/Login_IMG.svg"
              alt="About us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div>
            <p className="text-gray-700 mb-4">
              Welcome to Forever, your one-stop shop for timeless and
              trend-setting fashion. We are passionate about curating the finest
              clothing collections that blend comfort, quality, and style.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began with a vision to make fashion accessible and
              enjoyable for everyone. Whether you're looking for casual wear,
              formal outfits, or unique statement pieces, we have something for
              every occasion.
            </p>
            <p className="text-gray-700">
              At Forever, customer satisfaction is at the heart of what we do.
              From carefully sourcing fabrics to delivering your purchases
              swiftly, we strive to create an exceptional shopping experience.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          WHY CHOOSE US
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Quality
            </h3>
            <p className="text-gray-600">
              We ensure that every product meets the highest standards of
              quality and durability.
            </p>
          </div>

          {/* Column 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Convenience
            </h3>
            <p className="text-gray-600">
              Our easy-to-use platform makes shopping simple and enjoyable from
              anywhere.
            </p>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Exceptional Experience
            </h3>
            <p className="text-gray-600">
              We provide top-notch customer service to ensure your complete
              satisfaction every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
