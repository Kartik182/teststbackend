const express=require('express');
const router=express.Router();

const{addreview}=require("../controllers/addreview");
const{deletereview}=require("../controllers/deletereview");
const{getallreviews}=require("../controllers/getallreviews");
const{findreviewbyid}=require("../controllers/findreviewbyid");
const{updatereview}=require("../controllers/updatereview");

router.post("/post",addreview);
router.delete("/delete/:id",deletereview);
router.get("/get",getallreviews);
router.get("/get/:id",findreviewbyid);
router.put("/update/:id",updatereview);

module.exports=router;