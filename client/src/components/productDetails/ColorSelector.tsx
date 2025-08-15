export default function ColorSelector({ colors, selected, onSelect }: any) {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium mb-2">Color</h4>
      <div className="flex gap-2">
        {colors.map((color: string) => (
          <button
            key={color}
            className={`w-6 h-6 rounded-full border ${selected === color ? "ring-2 ring-primary" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => onSelect(color)}
          />
        ))}
      </div>
    </div>
  );
}
