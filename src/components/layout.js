import React, { useEffect, useState } from "react"
import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import Footer from "./footers/footer"
import { getAllBlogs, getAllEvents } from "../../queries"
import client from "../../client"

export default function Layout({ children }) {
  
  const [blogs, setBlogs] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchBlogs()
    fetchEvents()
  }, [])

  const fetchBlogs = async () => {
    try {
      const { data } = await client.query({
        query: getAllBlogs().query,
      })
      console.log(data, "cksocm")
      setBlogs(data.blogCollection.items)
    } catch (err) {
      console.error("Error fetching data:", err)
    }
  }

  const fetchEvents = async () => {
    try {
      const { data } = await client.query({
        query: getAllEvents().query,
      })
      console.log(data, "cksocm")
      setEvents(data.eventsCollection.items)
    } catch (err) {
      console.error("Error fetching data:", err)
    }
  }

    
  return (
    <>
      <SEO />
      <HeaderBasic blogs={blogs} events={events}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

