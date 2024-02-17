import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
function RootRouter(){
 return <>
 <Navigation/>
  <Outlet/>
 </>
}
export default RootRouter;