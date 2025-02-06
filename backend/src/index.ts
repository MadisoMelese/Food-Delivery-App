import  express  from "express";
import  cors  from "cors";
import "dotenv/config"
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";


 // Add your routes here..

const app = express();
const PORT: number = 3000
app.use(express.json())
app.use(cors());

app.use('/api/my/user', myUserRoute)








  app.listen(PORT, async ()=>{
    try{
      const conn = await mongoose.connect(process.env.MONGO_URL as string)
      console.log(`Server running on port ${PORT}`);
      console.log("MongoDB connected successfully")
    } catch(err: any) {
      console.log("Error connection to MongoDB:", err.message)
      process.exit(1)
    }
  }); 


