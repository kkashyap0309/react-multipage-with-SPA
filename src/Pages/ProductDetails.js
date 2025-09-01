import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h1>ProductDetails</h1>
      <h3>Product - {params.productId}</h3>

      {/* The "to" props with two dots (..) takes back to previous page in the case of relative path. Since product detail has the url
       of product/:productId inside the parent of  "/root" so just adding to=".." will consider the its direct
       upline as root which is parent here not the "products" page.

       Hence we need to add the "relative" props with value of "path". By default it is route which is just the
       behvaiour mentioned in above paragraph.

       Note: - if we define an absoulte path then we have to define the proper absolute path in back link "to" prop
       to navigate back its previous page
     */}
      <button><Link to=".." relative="path">Back</Link></button> 
    </>
  );
}

export default ProductDetails;
