import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>This is home page</h1>
      {/* This custom tag from react-router-dom allows to navigate to the  path added under "/products" 
      without refreshing the page. unlike using <a> tag and adding lnk to href
      */}
      <Link to={"/products"}>go to products page</Link>
    </>
  );
}

export default HomePage;
