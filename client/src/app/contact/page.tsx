import React from "react";

export default function page() {
  return (
    <div>
      <div className="bg-white py-20 px-6 md:px-12">
        {/* Heading */}
        <h1 className="text-center text-xl font-semibold text-gray-800 tracking-wide mb-12">
          CONTACT THE DEVELOPER
        </h1>

        {/* Content */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div>
            <img
              src="images/Login_IMG.svg"
              alt="Developer workspace"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Developer Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                About the Developer
              </h2>
              <p className="text-gray-700">
                Hi, I’m <strong>John Doe</strong>, a passionate Full-Stack
                Developer who built this website using modern web technologies
                like React, TailwindCSS, Node.js, and MongoDB. I specialize in
                creating fast, responsive, and user-friendly eCommerce solutions
                that drive results.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Contact Information
              </h2>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:developer@example.com"
                  className="text-blue-600 hover:underline"
                >
                  developer@example.com
                </a>
                <br />
                Phone: (123) 456-7890
                <br />
                Location: Remote / Worldwide
              </p>
            </div>

            {/* Extra Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Work with Me
              </h2>
              <p className="text-gray-700">
                I’m open to freelance projects, collaborations, and full-time
                opportunities. Let’s build something amazing together!
              </p>
              <button className="mt-4 px-5 py-2 border border-gray-800 rounded hover:bg-gray-800 hover:text-white transition">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
