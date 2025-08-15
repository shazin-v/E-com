export default function QuantitySelector({ value, onChange }: any) {
  return (
    <div className="flex items-center gap-2 mt-4">
      <button className="border px-3 py-1" onClick={() => onChange(Math.max(1, value - 1))}>−</button>
      <span>{value}</span>
      <button className="border px-3 py-1" onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}
