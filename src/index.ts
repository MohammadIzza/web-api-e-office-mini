import Elysia from "elysia";
import Routes from "./route";

// intial elysia 
const app = new Elysia();

// route home 
app.get('/',()=> 'Hello Home');

// add route
app.group('/api',(app)=>app.use(Routes));

// start server on port 3000
app.listen(3000);

console.log(`Running on http://${app.server?.hostname}:${app.server?.port}`);
