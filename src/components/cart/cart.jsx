// import { useCallback, useContext } from "react"
// import { CartContext } from "../../context/cart-context"
// import useRazorpay from "react-razorpay"
// import Item from "../item/item"
// import { Link } from "react-router-dom"

// const Cart = (item) => {
//     let total=0
//         const {cartData}=useContext(CartContext)
//         const{removeCartData}=useContext(CartContext)

//         const Razorpay=useRazorpay();
//         const handlePayment = useCallback(() => {
//             const options={
//                 keys:'rzp_test_6Op3e5cfG1ipgf',
//                 amount:"3000",
//                 currency:"INR",
//                 name:"GameZone",
//                 description:"Gaming Transction",
//                 handler:(res)=>{
//                     console.log(res)
//                 },
            
//                 prefill:{
//                     name:"Sachin Sahoo",
//                     email:"sachinsahoo341@gmail.com",
//                     contact:"123456789"

//             },
//             notes:{
//                 address: "odisha"
//             },
//                 theme:{
//                     color:"#3399cc"
//                 },
//      }
//      const rzpay = new Razorpay(options);
//     rzpay.open();
//   }, [Razorpay]);


        
//   return (
//     <div>
//         <section>
//     <button> <Link to={"/"}>Home</Link></button>
//         </section>
//         <section>
//             <section>
//             {cartData.map((cartItem)=>{
//         return (
//             <article>
//                 <img src={cartItem.image} alt="image" />
//                 <article>{cartItem.title}</article>
//                 <article>{cartItem.price}</article>
//                 <button onClick={( )=>{removeCartData(item)}}>Remove</button>
//             </article>
//         )    
//       })}
//             </section>
//             <section>
//                 <article> Billing Information </article>
//                 {cartData.map((cart)=>{
//                     total=total+cart.price
//                     return <article>
//                         <span>{cart.title}</span>
//                         <span>{cart.price}</span>
//                                             </article>
//                 })}
//                 <article>Total:{total}</article>
//                 <button onClick={(total)=>{handlePayment(total)}}>Click</button>
//             </section>
//         </section>
      
//     </div>
//   )
// }
// export default Cart
import { useCallback,useContext } from "react";
import useRazorpay from "react-razorpay";
import Item from "../item/item"
import { Link } from "react-router-dom"
// import { useCallback, useContext } from "react"
import { CartContext } from "../../context/cart-context"
import "./cart.css"

export default function App() {
  const Razorpay = useRazorpay();
  let total=0
        const {cartData}=useContext(CartContext)
        // const{removeCartData}=useContext(CartContext)

  const handlePayment = useCallback(() => {

    const options = {
      key: "rzp_test_6Op3e5cfG1ipgf",
      amount: total*100,
      currency: "INR",
      name: "GameZone",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Sachin Sahoo",
        email: "sachinsahoo341@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "odisha",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
        <section>
   <button> <Link to={"/"}>Home</Link></button>
        </section>
        
             <section>
             {cartData.map((cartItem)=>{
             <article>
                 <img src={cartItem.image} alt="image" />
                 <article>{cartItem.title}</article>
                 <article>{cartItem.price}</article>
                 {/* <button onClick={( )=>{removeCartData(item)}}>Remove</button> */}
            </article>
})   
       }
            </section>
                <article> Billing Information </article>
                {cartData.map((cart)=>{
                    total=total+cart.price
                   return <article>
                        <span>{cart.title}</span> :
                        <span>{cart.price}</span>
                        <br/>
                        <button>Remove </button>
                                            </article>  
                                          
                 })}
                 <section>Total:{total}</section>
                 
        
      <button onClick={(total)=>{handlePayment(total)}}>Checkout</button>
    </div>
  );
}