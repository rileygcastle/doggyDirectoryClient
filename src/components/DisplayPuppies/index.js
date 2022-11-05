import React from "react"
import EditPuppyForm from "../EditPuppyForm"
import DeletePuppy from "../DeletePuppy"
import "./styles.css"

const DisplayPuppies = ({ puppiesArray, updatePuppy, deletePuppy }) => {
  return puppiesArray.map((puppy) => (
    <Puppy
      key={puppy.id}
      puppy={puppy}
      updatePuppy={updatePuppy}
      deletePuppy={deletePuppy}
    />
  ))
}

const Puppy = ({ puppy, updatePuppy, deletePuppy }) => (
  <div className="display-img">
    <div className="display-info">
      <p>Name:{puppy.name}</p>
      <p>Breed:{puppy.breed}</p>
      <p>personality:{puppy.personality}</p>
    </div>
    <img src={puppy.imageUrl} alt={`${puppy.name} the puppy`} />
    <EditPuppyForm updatePuppy={updatePuppy} puppy={puppy} />
    <DeletePuppy puppy={puppy} deletePuppy={deletePuppy} />
  </div>
)

export default DisplayPuppies
