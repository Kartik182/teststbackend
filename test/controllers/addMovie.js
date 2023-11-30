const movieData=require('../models/movie');


exports.addMovie=async(req,res)=>{
    try{
    const createData=await movieData.create(req.body)
    res.status(201).json(createData);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }

}