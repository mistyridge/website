import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoBanner from "../components/infoBanner"
import OffersDynamic from "../components/offersDynamic"
import client from "../../client"
import { getAllBlogs } from "../../queries"

export default function Blogs() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
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

  return (
    <Layout>
      <SEO
        title="Blogs"
        description="The Misty Ridge Retreat B&B can host a variety of small and large events such as weddings, yoga retreats, honey moons, and more! Ask as about the packages we can offer for you upcoming event!"
      />
      <OffersDynamic datas={blogs} />
      <InfoBanner />
    </Layout>
  )
}
