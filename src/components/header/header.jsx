import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import "./header.css"
import { CartContext } from "../../context/cart-context"
const Header = () => {
    const{cartData}=useContext(CartContext)
    const navigate=useNavigate()
  return (
    <div>
      <nav className="nav">
        <section className="sec">
            GameZone
        </section>
        <section onClick={()=>{navigate("/cart")}}>
            <span>{cartData.length}</span>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </section>
      </nav>
    </div>
  )
}

export default Header
