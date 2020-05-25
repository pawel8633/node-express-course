const express=require('express');
const app=express();

const mockUserdDta=[
{name:'Mark'},
{name:'Jill'}]
app.get('/users',function(reqest,respons){

    respons.json({
                   success :true,
                   message: 'successfully got users. Nice!',
 	 	           users: mockUserData


    })
})
app.listen(8000,function(){console.log('server is listening')})