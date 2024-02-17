import { useLoaderData } from 'react-router-dom';
import MovieTile from '../MovieTile/MovieTile';
import classes from "./MovieList.module.css";
function MovieList(){
     const movies = useLoaderData()
    return (
    <div className={classes.movieList}>
    <MovieTile movies={movies}/>  
    </div>
    )
}

export async function loader(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGNkYTJhZWMzZTEyNGVhZDMwYjI2YTRlNmRhN2FlOCIsInN1YiI6IjY0YmJhNDRkNThlZmQzMDBlMmYxM2JhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rft8_I-bxq_U8jttz7wylswezOBBzh7IvkdKM2rpgjI'
        }
      };

      const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        else{
          const resData = await response.json();
            return resData.results}
}
export default MovieList;