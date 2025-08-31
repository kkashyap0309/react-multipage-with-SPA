import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateButtonClickHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>This is home page</h1>
      {/* This custom tag from react-router-dom allows to navigate to the  path added under "/products" 
      without refreshing the page. unlike using <a> tag and adding lnk to href
      */}
      <Link to={"/products"}>go to products page</Link>

      {/* The other way to navigate to different URL is using useNavigate hook. We may encouter such scenarios
       like we want to navigate to the different link based on some time out or  modal close.
       So in those cases we may navigte to diffrent url programtically
       
       Below is example adding on button click to show that programtically. But please note we should always
       use Link to navigate to other URL if its static*/}
      <p>
        <button onClick={navigateButtonClickHandler}>
          Navigate To Products
        </button>
      </p>
    </>
  );
}

export default HomePage;
