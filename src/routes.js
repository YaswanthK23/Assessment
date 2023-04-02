const router = require("express").Router();
const data = require("./InitialData");

router.get("/user", async (req,res) => {
    res.render("table", {data : data});
})

router.get("/user/add", async(req,res) => {
    res.render("form");
})

router.post("/user/add", async (req,res) => {
    res.send("form")
    if(req.body.name !== undefined && req.body.email !== undefined && req.body.age !== undefined && req.body.city !== undefined && req.body.profession !== undefined){ 
        data.push({
            name : req.body.name,
            email : req.body.currentClass,
            division : req.body.email,
            age : req.body.age,
            city: req.body.city,
            profession: req.body.profession
        })
        res.send(data)
    }
    else{
        res.sendStatus(400);
    }
})




module.exports = router;