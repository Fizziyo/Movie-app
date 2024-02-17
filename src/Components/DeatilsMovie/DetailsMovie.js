import { Link } from "react-router-dom";
import {useSelector } from "react-redux/es/hooks/useSelector";
import classes from  "./DetailsMovie.module.css"
function DetailsMovie(){
   const movie = useSelector(state => state.selectedMovie)

    return <>
    {
            <div className={classes.detailsMovie}key={movie.id}>
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie-pic"/> 
                <p className={classes.para}>{movie.overview}</p>
                <Link to="..">Back</Link>
            </div>
        
       }
    
    
    </>
   
}
export default DetailsMovie;