const reviewData=require('../models/review');

exports.updatereview=async(req,res)=>{
    try {
        const{id}=req.params;
        const review=await reviewData.findByIdAndUpdate(id,req.body);
        if(!review){
            return res.status(404).json({message:`cannot find book by ${id}`})
        }
        const updatedBooks=await reviewData.findById(id);
        res.status(200).json(updatedreview);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}