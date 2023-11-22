const Products = ({ prod, page }) => {
  return (
    <>
      {prod.products && prod.products.length > 0 && (
        <div className="product--container">
          {prod.products.slice(page * 10 - 10, page * 10).map((i) => {
            return (
              <div key={i.id} className="product--single">
                <img src={i.thumbnail} alt={i.title} />
                <span> {i.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;
