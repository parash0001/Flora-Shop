import { Link } from "react-router-dom"
import "./FavouriteItemsCard.css"
import { useDispatch } from "react-redux"
import { addItemsToCart } from "../../actions/CartAction"
import { deleteFavouriteItemsToCart } from "../../actions/FavouriteAction"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const FavouriteItemsCard = ({ item, deleteFavouriteItems }) => {
  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(addItemsToCart(item.product, 1))
    dispatch(deleteFavouriteItemsToCart(item.product))
    toast.success("Item Added To Cart and Removed from Favourites")
    deleteFavouriteItems(item.product) // Call the prop function to update parent component state
  }

  return (
    <div className="FavouriteItemsCard">
      <div>
        <img src={item.image || "/placeholder.svg"} alt={item.name} />
        <p onClick={() => deleteFavouriteItems(item.product)}>Remove</p>
        <Link
          to={`/product/${item.product}`}
          style={{
            fontSize: "300 0.9vmax",
            fontFamily: "cursive",
          }}
        >
          {item.name}
        </Link>
      </div>

      <div>
        <span>{`$ ${item.price}`}</span>
      </div>

      <div>
        <p style={{ paddingBottom: ".5vmax" }}>
          <b className={item.stock < 1 ? "redColor" : "greenColor"}>{item.stock < 1 ? "Out of Stock" : "In Stock"}</b>
        </p>
      </div>

      <div>
        <button className="favouritesButton" onClick={addToCartHandler} disabled={item.stock < 1}>
          Add To Cart
        </button>
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
    </div>
  )
}

export default FavouriteItemsCard

