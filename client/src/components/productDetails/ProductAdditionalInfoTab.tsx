export default function ProductAdditionalInfoTab({ colors, sizes }: any) {
  return (
    <div>
      <p><strong>Color:</strong> {colors.join(", ")}</p>
      <p><strong>Size:</strong> {sizes.join(", ")}</p>
    </div>
  );
}
