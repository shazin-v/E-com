export default function SizeSelector({ sizes, selected, onSelect }: any) {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium mb-2">Size</h4>
      <div className="flex gap-2">
        {sizes.map((size: string) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`px-3 py-1 border rounded ${
              selected === size ? "bg-primary text-white" : "bg-white"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
