const reviewData=require('../models/review');

exports.getallreviews=async(req,res)=>{
    try{
        const review=await movieData.find({});
        res.status(200).json(review);
    }catch(error){
        res.status(500).json({message:error.message});

}
}