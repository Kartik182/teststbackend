const express=require('express');
const router=express.Router();

const{addMovie}=require("../controllers/addMovie");
const{deletemovie}=require("../controllers/deletemovie");
const{getallmovies}=require("../controllers/getallmovies");
const{findmoviebyid}=require("../controllers/findmoviebyid");
const{updatemovie}=require("../controllers/updatemovie");

router.post("/post",addMovie);
router.delete("/delete/:id",deletemovie);
router.get("/get",getallmovies);
router.get("/get/:id",findmoviebyid);
router.put("/update/:id",updatemovie);

module.exports=router;