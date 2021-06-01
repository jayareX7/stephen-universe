import React from "react"
import { graphql, Link } from "gatsby"
import useProjectData from '../static_queries/useProjectData'
import ScrollApp, { GoBack } from "../components/Buttons"
//this component handles the blur img & fade-ins

export default function Projects(props) {
  const data = props.data.markdownRemark
  const allProjectData = useProjectData()
  const nextSlug = getNextSlug(data.fields.slug)

  function getNextSlug(slug) {
    const allSlugs = allProjectData.map(project => {
      return project.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if(nextSlug !== undefined && nextSlug !== '') {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  return (
   <>

   <GoBack />

   <nav className="breadcrumb" aria-label="breadcrumbs">
     <ul>
     <li><Link to="/">Home</Link></li>
       <li><Link to="/projects">Projects</Link></li>
     </ul>
   </nav>

    <figure className= "">
        <img className="image" src={data.frontmatter.image} alt="" />
    </figure>

        <blockquote className="blockquote">{data.frontmatter.blockquote}</blockquote>
        
        <div className= "title is-medium">
          <h1>{data.frontmatter.title}</h1></div> 
            <h3>Project Date: {data.frontmatter.date}</h3>
            <div className= "">
              <h2>Team: {data.frontmatter.author}</h2>
              <h2>Role: {data.frontmatter.role} </h2>
            </div>
            <div className="">
              <h2>Stack: {data.frontmatter.stack}</h2>
              <h2>Tools: {data.frontmatter.tools}<i></i></h2>
        </div>
         
        <div className="columns is-multiline">
          <div className="column is-4">
            <img src= {data.frontmatter.header_image1} alt=""/>
            <p>{data.frontmatter.header_description1}</p>
          </div>
    
          <div className="column is-4">      
            <img src= {data.frontmatter.header_image2} alt=""/>
            <p>{data.frontmatter.header_description2}</p>
          </div>

          <div className="column is-4">
            <img src= {data.frontmatter.header_image3} alt=""/>
            <p>{data.frontmatter.header_description3}</p>
          </div>


          <div className="column is-12">
                <figure className= "">
                  <img src= {data.frontmatter.body_image2} alt=""/>
                </figure>
                <blockquote className="blockquote">{data.frontmatter.quote2}</blockquote>
          </div>

          <div className="column is-12">
              <figure className= "">
                <img src= {data.frontmatter.body_image2} alt="" />
              </figure>
              <blockquote className="blockquote">{data.frontmatter.quote3}</blockquote>
          </div>

          <div className="column is-12">
              <figure className= "">
                <img src= {data.frontmatter.body_image3} alt="" />
              </figure>
          </div>
        </div>

        <div className= "" dangerouslySetInnerHTML={{ __html: data.html }}></div>
          <div className="columns">
            <div className="column is-12">
              <figure className= "">
                <img src= {data.frontmatter.body_image4} alt="" />
              </figure>
            </div>
          </div>

<ScrollApp />

  </>
    
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        image
        quote
        role
        stack
        tools
        header_image1
        header_description1
        header_image2
        header_description2
        header_image3
        header_description3
        body_image1
        quote2
        body_image2
        quote3
        body_image3
        body_image4
      }
      html
    }
  }
`