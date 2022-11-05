import React, { useState } from "react"
import "./styles.css"

const CreatePuppyForm = ({ addPuppy }) => {
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [personality, setPersonality] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const handleName = (e) => setName(e.target.value)
  const handleBreed = (e) => setBreed(e.target.value)
  const handlePersonality = (e) => setPersonality(e.target.value)
  const handleImage = (e) => setImageUrl(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:8000", {
      method: "POST",
      body: JSON.stringify({ name, breed, personality, imageUrl }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => addPuppy(data.puppy))
  }

  return (
    <>
      <h2 className="create-title">Enter in a dog:</h2>
      <form onSubmit={handleSubmit} className="create-form">
        <div>
          <label className="create-input-label" htmlFor="Name">
            Name:
          </label>
          <input
            type="text"
            value={name}
            name="Name"
            onChange={handleName}
            className="create-inputs"
          ></input>
        </div>
        <div>
          <label className="create-input-label" htmlFor="Breed">
            Breed:
          </label>
          <input
            type="text"
            value={breed}
            name="Breed"
            onChange={handleBreed}
            className="create-inputs"
          ></input>
        </div>
        <div>
          <label className="create-input-label" htmlFor="Personality">
            Personality:
          </label>
          <input
            type="text"
            value={personality}
            name="personality"
            onChange={handlePersonality}
            className="create-inputs"
          ></input>
        </div>
        <div>
          <label className="create-input-label" htmlFor="image">
            Image URL:
          </label>
          <input
            type="text"
            value={imageUrl}
            name="image"
            onChange={handleImage}
            className="create-inputs"
          ></input>
        </div>
        <button className="create-btn" type="submit">
          Sumbit
        </button>
      </form>
    </>
  )
}

export default CreatePuppyForm
