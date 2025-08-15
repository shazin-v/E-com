export default function ProductReviewsTab({ reviews }: any) {
  return (
    <div>
      {reviews.map((review: any, idx: number) => (
        <div key={idx} className="mb-4 border-b pb-4">
          <p className="font-medium">{review.name}</p>
          <p className="text-gray-500 text-sm">{review.date}</p>
          <p className="mt-2">{review.comment}</p>
        </div>
      ))}

      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="border p-2 w-full rounded" />
        <input type="email" placeholder="Your Email" className="border p-2 w-full rounded" />
        <textarea placeholder="Your Review" className="border p-2 w-full rounded" rows={4}></textarea>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
