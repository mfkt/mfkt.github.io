import React, { useState, useEffect } from "react"
import { getLanguages, getProgrammings, getTechnologies } from '../services/fireService'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  const [languages, setLanguages] = useState(null)
  const [programming, setProgramming] = useState(null)
  const [technologies, setTechnologies] = useState(null)

  useEffect(() => {
    getLanguages()
    .then(data => {
      setLanguages(data)
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })

    getProgrammings().then(data => {
      setProgramming(data)
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })

    getTechnologies("ngqtcwrQ1ZgoaEfgSUka").then(data => {
      setTechnologies(data)
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
    <div>{languages ? "languages" : "Loading..."}</div>
    <div>{programming ? "programming" : "Loading..."}</div>
    <div>{technologies ? "technologies" : "Loading..."}</div>
    </>
  )
}

export default IndexPage
