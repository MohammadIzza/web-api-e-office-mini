// import elysia
import Elysia from "elysia";
import { getPost } from "../controllers/postController";


// membuat route 
const Routes = new Elysia({prefix : '/posts'})
    // get all post 
    .get('/',()=>getPost())
    


export default Routes;
