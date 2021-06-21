import { useState, useEffect } from 'react'
import './Dogs.css'

export const Dogs = () => {
  const [dogs, setDogs] = useState([])
  const [loading, setLoading] = useState(false)

  const getNewDogs = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://dog.ceo/api/breeds/image/random/4')
      const res = await response.json()
      setDogs(res.message)
      setLoading(false)
    } catch {
      setLoading(false)
      console.error('error in petition')
    }
  }

  useEffect(() => {
    getNewDogs()
  }, [])

  return (
    <div className="container-dogs">
      <h3>Dogs</h3>
      <button className="buttonDogs" onClick={getNewDogs}>
        new other dogs
      </button>
      {loading && <h4>loading...</h4>}
      <div className="container-img">
        {!loading &&
          dogs.map((img, index) => (
            <figure key={index}>
              <img src={img} alt={`dog-${index}`} />
            </figure>
          ))}
      </div>
    </div>
  )
}
