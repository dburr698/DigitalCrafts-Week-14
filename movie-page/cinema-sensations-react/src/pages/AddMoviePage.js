import React, { useState } from 'react'

function AddMoviePage(props) {

    const [movie, setMovie] = useState({})

    const  handleChange = (e) => {
       setMovie({
           ...movie,
           [e.target.name]: e.target.value
       })
    }

    const handleAddMovieButton = () => {
        console.log(movie)
        fetch("http://localhost:8080/api/movies", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    props.history.push('/')
                }
            })
    }

    return (
        <div>
            <h1>Add Movie</h1>
            <input type='text' name='title' onChange={handleChange} placeholder='Enter Title' />
            <input type='text' name='genre' onChange={handleChange} placeholder='Genre' />
            <input type='text' name='director' onChange={handleChange} placeholder='Director' />
            <input type='text' name='year' onChange={handleChange} placeholder='Year' />
            <input type='text' name='poster' onChange={handleChange} placeholder='Poster URL' />
            <button onClick={handleAddMovieButton}>Add Movie</button>
        </div>
    )

}

export default AddMoviePage