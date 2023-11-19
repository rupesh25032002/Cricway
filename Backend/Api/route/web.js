import express from "express"
import contactcontroller from "../controller/contactcontroller.js"
import playercontroller from "../controller/playercontroller.js"
import usercontroller from "../controller/usercontroller.js"
const router = express.Router()

router.get("/",playercontroller.getallplayerdata)
router.get("/?playername=:playername",playercontroller.getplayerdata)
router.post("/",playercontroller.createDoc)
router.delete("/:id",playercontroller.deleteDocbyid)
// router.delete("/:name",playercontroller.deleteDocbyname)


//Autentication
router.post("/login",usercontroller.getuserdata)
router.post("/authenticate",usercontroller.insertuserdata)

//contactdata
router.post("/contactdata",contactcontroller.createcontactdoc)
export default router