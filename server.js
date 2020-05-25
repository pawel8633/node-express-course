const express=require('express');
const app=express();

const mockUserData=[
{name:'Mark'},
{name:'Jill'}]
app.get('/users/:id',(req,res)=>{
  console.log(req.params.id)
    res.json({
                   success :true,
                   message: 'go to user!',
 	 	           users: req.param.id


    })
})
app.listen(8000,function(){console.log('server is listening')})