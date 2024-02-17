import  {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import MovieList, {loader as movieLoader}from "./Components/MovieList/MovieList";
import Favorite from "./Components/Favorite/Favorite";
import  HomePage from "./Components/Homepage";
import RootRouter from "./Components/Root/Root";
import Error from "./Components/Error/Error";
import DetailsMovie from "./Components/DeatilsMovie/DetailsMovie";

function App() {
  const router = createBrowserRouter([
    {
      path:"/", 
      element:<RootRouter/>, 
      errorElement:<Error/>,
      children:[
         {index:true, element:<HomePage/>},
          {path: "/MovieList" , element:<MovieList/>, loader:movieLoader},
          {path:"/Favorite",element:<Favorite/>},
          {path: "/movie-detail", element:<DetailsMovie/>}

      ]
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider  router={router}/>
      
      
     
    </div>
  );
}

export default App;
