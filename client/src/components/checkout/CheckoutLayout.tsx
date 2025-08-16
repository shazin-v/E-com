export default function CheckoutLayout({
  heading,
  children,
  leftChildren,
  rightChildren,
  showHeader = true,
  className = "",
}) {
  return (
    <>
      {/* <div className={`py-24 relative min-h-screen bg-gray-50 ${className}`}> */}
      {/* Conditional Header */}
      {showHeader && heading && (
        <h2 className="font-manrope font-bold text-4xl leading-10 mb-8 text-black text-center">
          {heading}
        </h2>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side Content - Takes 2/3 width */}
        <div className="lg:col-span-2">{leftChildren || children}</div>

        {/* Right Side Content - Takes 1/3 width */}
        <div className="lg:col-span-1">{rightChildren}</div>
      </div>
    </>
  );
}
