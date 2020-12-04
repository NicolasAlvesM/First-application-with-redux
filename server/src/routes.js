const {Router} = require('express')
const UserController = require('./controllers/UserController') 

const routes=Router()
routes.get('/new-user',UserController.create)
module.exports=routes