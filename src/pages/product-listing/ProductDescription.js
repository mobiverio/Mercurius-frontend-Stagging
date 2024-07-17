const ProductDescription = ({ product }) => {
  return (
    <main className="w-full">
      <p>{product?.description}</p>
    </main>
  );
};

export default ProductDescription;
