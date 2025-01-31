import React, {useEffect} from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
// import bg from "../../Assets/background.jpg";
// import bg2 from "../../Assets/background2.jpg";
import bg from "../../Assets/shopping2.webp";
import bg2 from "../../Assets/shopping4.jpg";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Products/ProductCard";
import Header from "./Header";
import MetaData from "../../more/MetaData";
import Footer from "../../more/Footer";
import BottomTab from "../../more/BottomTab";
import { ToastContainer } from "react-toastify";


const Home = () => {
  const dispatch = useDispatch();
  const { products,error,loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {

    dispatch(getProduct());
 
  }, [dispatch]);
  
  return (
    <>
      {loading ? (
        <loading />
      ) : (
        <>
          <MetaData title="FloraShop" />
          <Header />

          {/* Carousel */}
          <div className="banner">
            <Carousel className="new">
              <img src="https://gardeningheavn.com/wp-content/uploads/2020/01/Air-Purifying-House-Plants-1024x690.png"className="bgImg" alt="" />
              <img src="https://unbeleafable.ph/wp-content/uploads/2022/01/home-and-indoor-plants-2022-01-13-21-33-37-utc-2-1200x900.jpg" className="bgImg" alt="" />
              <img src="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/bonsai-4634225_1920.jpg?itok=v3bSnsNW" className="bgImg" alt="" />
              <img src="https://cdn.shopify.com/s/files/1/0267/1699/5754/files/home-garden-arrangement-with-copy-space_480x480.jpg?v=1622881576" className="bgImg" alt="" />
            </Carousel>
            <div className="home__content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Segoe Script",
                    fontSize: "3em",
                    fontWeight: "500",
                  }}
                >
                  Buy 2 Get
                </h2>
                <span
                  style={{
                    padding: "10px",
                    backgroundColor: "#fff",
                    margin: "0px 10px",
                    textAlign: "center",
                    width: "150px",
                    height: "40px",
                    color: "#26c",
                    fontFamily: "Segoe Script",
                    fontSize: "2.4em",
                    display: "flex",
                    justifyContent: "center",
                    lineHeight: ".7",
                    alignItems: "center",
                  }}
                >
                  1 Free
                </span>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "4.5em",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                  }}
                >
                  Plant and Flowers
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "4.5em",
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    lineHeight: ".7",
                  }}
                >
                  on Florashop
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    fontSize: "1em",
                    paddingTop: "10px",
                  }}
                >
                 
                </h2>
              </div>
              <div>
                <a href="#container">
                  <button
                    type="submit"
                    style={{
                      width: "120px",
                      height: "50px",
                      border: "none",
                      background: "#3BB77E",
                      margin: "10px 0",
                      fontSize: "1.2vmax",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    SHOP NOW
                  </button>
                </a>
              </div>
            </div>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Home;
