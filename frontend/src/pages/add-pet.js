import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import api from "../services/api.js"

export default () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [uf, setUf] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [zip, setZip] = useState(0)
  const [phone, setPhone] = useState(0)
  const [err, setErr] = useState("")
  let loading = false

  async function handlePetSubmit(e) {
    e.preventDefault()
    const data = {
      title,
      description,
      uf,
      city,
      address,
      zip,
      phone
    }
    if (!loading) {
      loading = true
      try {
        const response = await api.post("pets", data)
      } catch (err) {
        if (err.response) {
          setErr(err.response.data)
        }
      }
      loading = false
    }
  }
  return (
    <Layout>
      <SEO title="Add Pet" />
      <div className="container">
        {err ? (
          <div className="notification is-danger">
            <p>{`${err.message}: ${JSON.stringify(err.data.errors)}`}</p>
            <button onClick={() => setErr("")} className="delete"></button>
          </div>
        ) : (
          ""
        )}
        <form
          onSubmit={e => {
            if (!loading) {
              handlePetSubmit(e)
            }
          }}
        >
          <div className="field">
            <label htmlFor="title" className="label">
              Titulo:
            </label>
            <div className="control">
              <input
                onChange={e => setTitle(e.target.value)}
                id="title"
                type="text"
                className="input"
                placeholder="Nome do caso"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Descrição:</label>
            <div className="control">
              <textarea
                onChange={e => setDescription(e.target.value)}
                className="textarea"
                placeholder="Descrição do incidente"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <label htmlFor="uf" className="label">
              UF:
            </label>
            <div className="control">
              <input
                onChange={e => setUf(e.target.value)}
                id="uf"
                type="text"
                className="input"
                placeholder="SP"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="city" className="label">
              Cidade:
            </label>
            <div className="control">
              <input
                onChange={e => setCity(e.target.value)}
                id="city"
                type="text"
                className="input"
                placeholder="São Paulo"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="address" className="label">
              Endereço:
            </label>
            <div className="control">
              <input
                onChange={e => setAddress(e.target.value)}
                id="address"
                type="text"
                className="input"
                placeholder="Endereço"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="zip" className="label">
              CEP:
            </label>
            <div className="control">
              <input
                onChange={e => setZip(e.target.value)}
                id="zip"
                type="number"
                className="input"
                placeholder="CEP"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="phone" className="label">
              Telefone:
            </label>
            <div className="control">
              <input
                onChange={e => setPhone(e.target.value)}
                id="phone"
                type="number"
                className="input"
                placeholder="12 9521-9041"
              />
            </div>
          </div>
          <div className="field">
            <button className="button is-success"> Adicionar!</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
