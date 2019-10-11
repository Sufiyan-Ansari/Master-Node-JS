exports.GetWheatherController = 
(req,res,next)=>{
    res.render('wheather' , 
    {
        pageTitle: 'Wheather Report'
    });
};

exports.PostWheatherController = 
(req,res,next)=>
{
    res.render('wheather',{ pageTitle:'Hello' });
    console.log('Hello World');

};