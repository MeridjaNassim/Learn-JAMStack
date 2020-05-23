// Gatsby supports TypeScript natively!
import React,{useEffect,useState} from "react"
import {  Link  } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from '../components/Posts'

const SecondPage = (props) =>  { 
  return(
  
  <Layout>
    <SEO title="Posts" />
    <h1>Hi from the second page</h1>
    <p>Welcome to Product Page ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
    <p>We want dynamic content here</p>
    <Posts></Posts>
  </Layout>
)}


export default SecondPage
