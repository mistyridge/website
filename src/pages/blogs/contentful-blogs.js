import React, { useEffect } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import client from "../../../client"
import { getBlog } from "../../../queries"
import '../../styles/blogs.css'
import { BLOCKS } from '@contentful/rich-text-types';
import Layout from "../../components/layout"

// Trigger Deployment

const ContentfulBlog = ({pageContext}) => {
  const { slug } = pageContext;
  const [blogs, setBlogs] = React.useState(null)
  const { title } = blogs || {}
  
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    try {
      const { data } = await client.query({
        query: getBlog(slug).query,
      })
      setBlogs(data.blogCollection.items[0])
    } catch (err) {
      console.error("Error fetching data:", err)
    }
  }
  
  const rawData = blogs?.method || []

  const options = {
    renderNode: {
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
     <div className="wrap">
      <div className="imageWrap">
      <img src={blogs?.thumbnail?.url} alt="Your Image" />
      </div>
      <h1 className="title bold">{title}</h1>
      <div className="doc-wrap">{documentToReactComponents(rawData?.json , options)}</div>
    </div>
   </Layout>
  )
}

export default ContentfulBlog
