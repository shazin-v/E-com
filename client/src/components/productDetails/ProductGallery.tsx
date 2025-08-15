import React from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = React.useState(images[0]);

  return (
    <div>
      <div className="aspect-square overflow-hidden border rounded-lg">
        <img src={selectedImage} alt="Product" className="w-full h-full object-cover" />
      </div>

      <div className="flex gap-2 mt-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={`w-16 h-16 border rounded-lg overflow-hidden ${
              selectedImage === img ? "border-primary" : ""
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
