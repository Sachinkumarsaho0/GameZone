import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import "./item.css"


const Item = ({item}) => {
    const{addCartData}=useContext(CartContext)
    // console.log(item)
  return (
    <div className="box">
      <div className="section">
      <section> 
        <img src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="image" className="img"/>
        <article className="title">{item.title}</article>
        <article className="article" >{item.description}</article>
        <section>
            <article className="price">Price:{item.price}/-</article>
            <button onClick={()=>{addCartData(item)}} className="button"> Add Cart</button>
        </section>
      </section>
      </div>
    </div>
  )
}

export default Item
