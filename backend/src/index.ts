import  express  from "express";
import  cors  from "cors";
import "dotenv/config"

const app = express();
const PORT: number = 3000
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
  })


  app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
  }); 