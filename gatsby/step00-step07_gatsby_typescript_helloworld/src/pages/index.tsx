import { Link, navigate } from "gatsby"
import * as React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home () {
  return (
    <Layout headerTitile="Index Page Header">

      <Header title='Index Page'/>  
      <Link to='/about'>About</Link>
      <br/>
    <button onClick={()=>{
      navigate('/about')
    }}>Route to About Page</button>

    </Layout> 
  )
}
