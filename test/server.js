const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const dB=require('./middlewares/dB.js')
dB.connectTodB();
const movieRoutes=require("./routes/movieRoutes");
const reviewRoutes=require("./routes/reviewRoutes");
app.use("/api/movies",movieRoutes)
app.use("/api/movies/:movieId",reviewRoutes)

app.listen(3000,()=>{
    console.log(`Server started on 3000`);
 });