var express = require('express')
var router = express.Router()

router.get('/' , (req, res) => {
    res.send('Welcome to pharmacist route')
})

module.exports = router;