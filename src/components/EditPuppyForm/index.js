import React, { useState } from "react"
import "./styles.css"

const EditPuppyForm = ({ puppy, updatePuppy }) => {
  const [name, setName] = useState(puppy.name)
  const [breed, setBreed] = useState(puppy.breed)
  const [personality, setPersonality] = useState(puppy.personality)
  const [imageUrl, setImageUrl] = useState(puppy.imageUrl)
  const [formOpen, setFormOpen] = useState(false)

  const handleName = (e) => setName(e.target.value)
  const handleBreed = (e) => setBreed(e.target.value)
  const handlePersonality = (e) => setPersonality(e.target.value)
  const handleImage = (e) => setImageUrl(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8000/${puppy.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, breed, personality, imageUrl }),
    })
      .then((res) => res.json())
      .then((data) => updatePuppy(data.puppy))
  }
  const toggleOpen = () => setFormOpen(!formOpen)
  return (
    <div>
      {formOpen && (
        <form onSubmit={handleSubmit}>
          <div>
            <label className="edit-labels" htmlFor="Name">
              Name:
            </label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleName}
            ></input>
          </div>
          <div>
            <label className="edit-labels" htmlFor="Breed">
              Breed:
            </label>
            <input
              type="text"
              value={breed}
              name="breed"
              onChange={handleBreed}
            ></input>
          </div>
          <div>
            <label className="edit-labels" htmlFor="Personality">
              Personality:
            </label>
            <input
              type="text"
              value={personality}
              name="personality"
              onChange={handlePersonality}
            ></input>
          </div>
          <div>
            <label className="edit-labels" htmlFor="image">
              Image URL:
            </label>
            <input
              type="text"
              value={imageUrl}
              name="image"
              onChange={handleImage}
            ></input>
          </div>
          <button className="edit-submit-btn" type="submit">
            Sumbit
          </button>
        </form>
      )}
      <button className="edit-btn" onClick={toggleOpen}>
        {formOpen ? "Close" : "Edit"}
      </button>
    </div>
  )
}

export default EditPuppyForm
