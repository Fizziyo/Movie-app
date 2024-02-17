import {Link} from "react-router-dom";
import classes from"./Navigation.module.css";
function Navigation(){
 return<header className={classes.header}>
    <nav className={classes.nav}>
        <ul>
        <li className={classes.li}>
            <Link to="/">Home</Link>
        </li>
        <li className={classes.li}> 
            <Link to="/MovieList">Movie List</Link>
        </li>
        <li className={classes.li}>
            <Link to="Favorite">Favorite</Link>
        </li >
        <li className={classes.li}>
            <Link to="..">Back</Link>
        </li >
        
        </ul>
    </nav>
 </header>
}
export default Navigation;