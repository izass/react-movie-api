import React from 'react'

import { Container, Square, Poster } from './styles'

const Grid = (props) => {
  return (
    <Container>
      {props.list.map(movie => (
        <Square>
          <Poster to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster"/>
            <h2 key={movie.id}>{movie.title}</h2>
          </Poster>
        </Square>
      ))}
    </Container>
  )
}

export default Grid
