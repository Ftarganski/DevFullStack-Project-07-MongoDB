import express from 'express';
import UserController from '../controllers/UserController';

const auth = express.Router();
const userCtrl = new UserController();

auth.post('/login', async (req, res) => {
    const user = await userCtrl.login(req.body.userEmail, req.body.password);
    if(user){
        if(user.active){
            res.statusCode = 200;
            res.json(user);
        }else{
            res.statusCode = 404;
            res.json({msg: 'Inactive user.'});
        }
        return;
    }
    res.statusCode = 404;
    res.json({'msg': 'Invalid user data.'})
})

auth.post('/register', async (req, res) => {
    const result = await userCtrl.register(req.body.username, req.body.name, req.body.email, req.body.password);
    if(result){
        res.json({'msg': 'User created!'});
        return;
    }

    res.statusCode = 400;
    res.json({'msg': 'Error creating user.'});
    return;
})

auth.get('/confirm-email/:token', async (req, res) => {
    res.json({})
})

export default auth;