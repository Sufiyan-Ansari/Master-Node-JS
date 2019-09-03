let request = require('request');
let apiKey = '030dc4036d149e23bbd7bdf5d4422485';
let city = 'karachi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

module.export = class Wheather
{
    
}
request(url,(err,response,body)=>{
    if(err)
    {
        console.log('Error',err)

    }
    else
    {
        console.log('Body',body);
    }
});