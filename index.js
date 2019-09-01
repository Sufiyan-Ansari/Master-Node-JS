const express = require('express');

const app = express();

app.set('views','views');

app.set('view engine','ejs');

app.use('/',(req,res,next)=>{
    res.render('Student',
    {
        pageTitle:'Student'
    }
    );
});

app.listen(3000);