"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HeaderFooter = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Get the current pathname

  // Array of auth-related paths where Navbar and Footer should NOT be shown
  const authPages = ["/login", "/signup", "/forgot-password", "/otp"];

  // Check if the current route is one of the auth routes
  const isAuthPage = authPages.includes(pathname);

  return (
    <>
      {/* <div className="flex flex-col min-h-screen"> */}
      {/* TODO: Uncomment when everyhting works */}
      {/* {!isAuthPage && <Navbar />} */}

      {/* This makes children fill the remaining space */}
      {/* <div className="flex flex-1 overflow-hidden"> */}
      <div className={`py-24 relative min-h-screen bg-gray-50`}>
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
          {children}
        </div>
      </div>
      {/* </div> */}

      {!isAuthPage && <Footer />}
      {/* </div> */}
    </>
  );
};

export default HeaderFooter;
