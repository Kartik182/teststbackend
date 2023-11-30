const reviewData=require('../models/review');


exports.addreview=async(req,res)=>{
    try{
    const createData=await reviewData.create(req.body)
    res.status(201).json(createData);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }

}