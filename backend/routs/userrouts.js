const express =require('express');
const router = express.Router();
const {getusers,postuser,putuser,deleteuser}=require("../controllar/usercontrollar");

// router.get('/',getusers)
// router.post('/',postuser)
// router.put('/:id',putuser)
// router.delete('/:id',deleteuser)

router.route('/').get(getusers).post(postuser);
router.route('/:id').delete(deleteuser).put(putuser);

module.exports = router;