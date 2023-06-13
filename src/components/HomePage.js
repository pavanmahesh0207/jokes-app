import React, { useState, useEffect } from 'react'

const Homepage = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetchJokes()
  }, [])

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'
      )
      const data = await response.json()
      setJokes(data.jokes)
    } catch (error) {
      console.log('Error fetching jokes:', error)
    }
  }

  return (
    <div className="container">
      <h2 className="text-center">Jokes</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke) => (
            <tr key={joke.id}>
              <td>{joke.category}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Homepage
