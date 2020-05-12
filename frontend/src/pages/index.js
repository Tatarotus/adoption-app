import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import api from "../services/api.js"
import "./styles/index.css"

const IndexPage = () => {
  const [pets, setPets] = useState([])
  async function getPets() {
    try {
      const response = await api.get("pets")
      setPets(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getPets()
  }, [])

  function goToDetail() {}
  return (
    <Layout>
      <SEO title="Pet List" />
      <div className="container">
        <div className="pets ">
          {pets.map(pet => (
            <Link to="/detalhes/" state={{ pet }}>
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{pet.title}</p>
                    </div>
                  </div>
                  <div className="content">
                    <p>{pet.description}</p>
                    <br />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
