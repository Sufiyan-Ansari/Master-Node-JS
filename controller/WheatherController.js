exports.GetWheatherController = 
(req,res,next)=>{
    res.render('wheather' , 
    {
        pageTitle: 'Wheather Report'
    });
};