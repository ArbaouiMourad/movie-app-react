import React from 'react'
import MovieCard from './MovieCard'
 
 

const MovieList = ({movies=[]}) => {
    return (

        <div className="movie-list">
        {
            movies.map(el => <MovieCard key={el.id} movie={el} />)
        }
       
        {/* <div className="new-movie-card" onClick={()=>{
          onAddMovie({
          id:Math.random(),
          title: prompt('movie title: '),
          rating: Number(prompt('movie rating: ')),
          year: Number(prompt('movie year: ')),
          image:prompt('movie image :') 
        })

        }}      
       <AddModal />
          </div> */}
      </div>
    )
}

export default MovieList
