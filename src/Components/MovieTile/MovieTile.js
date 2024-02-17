import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { rootActions } from '../../Store/Reducers';
import  classes from "./MovieTile.module.css"



console.log(rootActions)
function MovieTile({movies}){
    const dispatch  = useDispatch();
    const favPicture = useSelector(state => state.favorites);

    const navigate = useNavigate()
    function ShowMovieDetail(movie){
        dispatch(rootActions.addSelectedMovie(movie))
        navigate(`/movie-detail`)
    }

    const initialFavState = {};
    favPicture.forEach(movie => {
        initialFavState[movie.id] = true;
    });


    const[isFavMovie,setIsFavMovie]= useState(initialFavState);
    
    function FavMovieHandler(movie) {
        const currentFavStatus = isFavMovie[movie.id];
        setIsFavMovie(prevState => ({
            ...prevState,
             [movie.id]: !prevState[movie.id]
        }));
        if (currentFavStatus) {
            dispatch(rootActions.removeFromFavorite(movie.id));
        } else {
            dispatch(rootActions.addTOFavorite(movie));
        }
    }
    
   
    return<>
    
        { movies.map((movie) => (
            <div className={classes.singleMovie} key={movie.id}>
                <h1>{movie.title}</h1>
               <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-pic" onClick={() =>ShowMovieDetail(movie)}/>
                <div>
                    <button onClick={() => FavMovieHandler(movie)}>
                    <FontAwesomeIcon icon={faHeart} color={isFavMovie[movie.id] ? 'red' : 'grey'} />
                    </button>

                </div>
                
            </div>
            ))}
       
    
    </>
}
export default MovieTile;