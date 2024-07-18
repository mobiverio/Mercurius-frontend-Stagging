const ProductDescription = ({ product }) => {
  return (
    <main className="w-full p-4">
      <p>{product?.description}</p>
    </main>
  );
};

export default ProductDescription;
