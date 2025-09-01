import { Link } from "react-router-dom";

const PRODUCTS = [
  { title: "Product1", id: "p1" },
  { title: "Product2", id: "p2" },
  { title: "Product3", id: "p3" },
];

function ProductsPage() {
  return (
    <>
      <h1>Products page</h1>
      <ul>
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            <Link to={p.id}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
