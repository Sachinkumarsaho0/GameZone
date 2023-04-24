import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../header/header"
import Item from "../item/item"
const Main = () => {
    const[old,setOld]=useState([])
    const[popular,setPopular]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:1337/api/olders').then((old)=>{
    setOld(old.data.data)
    console.log(old)
        }).catch(()=>{

        }).finally(()=>{

        })
        axios.get('http://localhost:1337/api/popularities').then((popular)=>{
        setPopular(popular.data.data)
        console.log(popular)

    }).catch(()=>{

    }).finally(()=>{

    })
    },[])
  return (
    <div>
      <Header/>

      <section>
        <article>Older</article>
        {old.map((item,key)=>{
          return  <Item item={item.attributes} key={key}/>
        })}
        <article>Popularity</article>
        {popular.map((item,key)=>{
          return  <Item item={item.attributes} key={key}/>
    })}
      </section>
    </div>
  )
}

export default Main
