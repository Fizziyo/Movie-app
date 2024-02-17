import MovieTile from "../MovieTile/MovieTile";
import { useSelector } from "react-redux";
function Favorite(){
  const selector = useSelector(state => state.favorites);
return<>
<MovieTile movies={selector}/>
</>
}
export default Favorite;
