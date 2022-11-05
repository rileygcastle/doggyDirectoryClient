import "./App.css"
import { useEffect, useState } from "react"
import CreatePuppyForm from "./components/CreatePuppyForm"
import DisplayPuppies from "./components/DisplayPuppies"

function App() {
  const [puppiesArray, setPuppiesArray] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setPuppiesArray(data.puppies))
  }, [])
  const addPuppy = (newPuppy) => {
    setPuppiesArray([...puppiesArray, newPuppy])
  }
  const updatePuppy = (editedPuppy) =>
    setPuppiesArray(
      puppiesArray.map((puppy) => {
        if (puppy.id === editedPuppy.id) return editedPuppy
        return puppy
      })
    )

  const deletePuppy = (id) => {
    setPuppiesArray(puppiesArray.filter((puppy) => puppy.id !== id))
  }
  return (
    <div>
      <h1 className="title">Doggy Directory</h1>
      <CreatePuppyForm addPuppy={addPuppy} />
      <DisplayPuppies
        puppiesArray={puppiesArray}
        updatePuppy={updatePuppy}
        deletePuppy={deletePuppy}
      />
    </div>
  )
}

export default App
