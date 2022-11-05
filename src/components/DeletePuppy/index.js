import React from "react"
import "./styles.css"

const DeletePuppy = ({ puppy, deletePuppy }) => {
  const handleDelete = () => {
    fetch(`http://localhost:8000/${puppy.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => deletePuppy(data.id))
  }
  return (
    <button className="delete-btn" onClick={handleDelete}>
      Delete
    </button>
  )
}

export default DeletePuppy
