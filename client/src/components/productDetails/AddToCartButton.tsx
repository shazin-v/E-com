import { Heart, ShoppingCart } from "lucide-react";

export default function AddToCartButton({ onAdd, onFavorite }: any) {
  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={onAdd}
        className="flex items-center justify-center bg-black text-white px-4 py-2 rounded"
      >
        <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
      </button>
      <button
        onClick={onFavorite}
        className="border rounded p-2"
      >
        <Heart className="w-4 h-4" />
      </button>
    </div>
  );
}
