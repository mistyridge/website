import React, { useEffect, useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import client from "../../../client"
import { getAllBlogs, getBlog, getEvent } from "../../../queries"
import '../../styles/blogs.css'
import { BLOCKS } from '@contentful/rich-text-types';
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ContentfulBlog = ({pageContext}) => {
  const { slug } = pageContext;
  const [events, setEvents] = React.useState(null)
  const { title } = events || {}
  
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    try {
      const { data } = await client.query({
        query: getEvent(slug).query,
      })
      setEvents(data.eventsCollection.items[0])
    } catch (err) {
      console.error("Error fetching data:", err)
    }
  }
  
  const rawData = events?.method || []
  const rawAsset = events?.method?.links?.assets?.block || {}
  const image = getImage(events?.thumbnail?.url)
  const findAssetById = (id) =>
    events?.method?.links?.assets?.block.find(asset => asset.sys.id === id);


  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node.data.target.sys.id;
        const asset = findAssetById(assetId);
        if (!asset) return null;
        return (
          <img
            src={asset.url}
            alt={asset.title || "Embedded Image"}
            style={{ maxWidth: "100%", height: "auto" }}
            />
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => { 
        console.log(node, children, 'thisISNO');
        return<h2 className="headingTwo">{children}</h2>},
      [BLOCKS.HEADING_1]: (node, children) => { 
        console.log(node, children, 'thisISNO');
        return<h1 className="headingTwo">{children}</h1>},
      [BLOCKS.HEADING_3]: (node, children) => { 
        console.log(node, children, 'thisISNO');
        return<h3 className="headingTwo">{children}</h3>},
      [BLOCKS.HEADING_4]: (node, children) => { 
        console.log(node, children, 'thisISNO');
        return<h4 className="headingTwo">{children}</h4>},
      [BLOCKS.HEADING_5]: (node, children) => { 
        console.log(node, children, 'thisISNO');
        return<h5 className="headingTwo">{children}</h5>},
      [BLOCKS.HEADING_6]: (node, children) => { 
        console.log(node, children, 'thisISNO');
        return<h6 className="headingTwo">{children}</h6>},
    },
    renderText: (text) => text.replace('!', '?'),
  };
  

  return (
   <Layout>
     <SEO title={title} />
     <div className="wrap">
      <div className="imageWrap">
      <img src={events?.thumbnail?.url} alt="Your Image" />
      </div>
      <h1 className="title bold">{title}</h1>
      <div className="doc-wrap">{documentToReactComponents(rawData?.json , options)}</div>
    </div>
   </Layout>
  )
}

export default ContentfulBlog
