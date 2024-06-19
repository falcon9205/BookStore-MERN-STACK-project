import express from "express"
import { PORT} from "./config.js";
import connectdb from "./Database/DBconnect.js";
import { Book } from "./Model/book.model.js";
import cors from "cors"

connectdb()
const app = express()
app.use(cors())
// app.use(cors(
//     {
//     origin: 'http://localhost:3000',
//     methods: ['GET','PUT','POST','PATCH','DELETE'],
//     allowedHeaders:['Content-Type']
// }
// ))
app.use(express.json())

app.get("/",(req,res)=>{
   
   res.send("running mernstack")
})

//add new books data from this route
app.post('/books',async(req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear)
        {
            return res.status(400).send({
                message : "send all the required data field"
            });
        }
        const newbook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        } 
        const book  = await Book.create(newbook)
        res.status(201).send(book)
    }catch(error){
        console.log(error.message);
        res.status(500).send({msg:error.message})
    }
})

//get all books data from this route
app.get("/books",async(req,res)=>{
    try{
        const books = await Book.find({})
        res.status(201).json({
            count : books.length,
            data: books
    })
    }
    catch(error){
       console.log(error?.message || "unable to load your data");
       res.status(500).send({msg:error.message})
    }
})

//get a particular user data from id through params
app.get("/books/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const books = await Book.findById(id)
        res.status(201).send(books)
    }
    catch(error){
       console.log(error?.message || "unable to load your data");
       res.status(500).send({msg:error.message})
    }
})

app.delete("/books/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const books = await Book.findByIdAndDelete(id)
        res.status(201).send(books)
    }
    catch(error){
       console.log(error?.message || "unable to delete your data");
       res.status(500).send({msg:error.message})
    }
})


app.put("/books/:id",async(req,res)=>{
    try{
         if(!req.body.title || !req.body.author || !req.body.publishYear)
            {
               return res.status(400).send("Please send all the datails")
            }
            const {id} = req.params
            
          const updated_data = await Book.findByIdAndUpdate(id,req.body) 
          if(!updated_data)
             return res.status(404).send("user not found") 
          res.status(200).json({
            data: updated_data
          })
    }
    catch(error){
         console.log(error?.message || "unable to add users");
         res.send(500).send(error.message)
    }
})



app.listen(PORT,()=>{
        console.log("server is running on ",PORT);
    })

//  mongoose.connect(URI)
//     .then(()=>{
//         console.log("Connection to database is done");
        
//     })


