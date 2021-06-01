import React from "react"
import Form from "../components/form"
import Layout from "../components/layout"
import Resume from "../components/resume"

export default function Contact() {
  return (
    <>
      <div className="container">
      <figure className="image is-2by1" style={{margin: '0 auto'}}>
      <img src="/assets/contact.png" />
      </figure>
      </div>
    <Layout >
    <Form />
        <Resume />
    </Layout>
    </>
  )
}