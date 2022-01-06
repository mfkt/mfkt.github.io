import { Link } from "gatsby"
import React from "react"
import Header from "./header"

export default function Navigation() {
  return (
    <>
        <Header></Header>
        <Link to="/">Me</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
    </>
  )
}