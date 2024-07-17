const ProductDescription = ({ product }) => {
  return (
    <main className="w-full">
      <h2 className="text-xl font-semibold">Description</h2>
      <p>{product?.description}</p>
    </main>
  );
};

export default ProductDescription;
