const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ***********************your code goes here
app.get("/",(req,res)=>{ //base route
    if(asnwar_json){
        res.send(asnwar_json)
    }else{
        res.send("Hello world!");
    }
   
})
//******************************** */
//condintion response jesons 
const underflow_json = {
    "status": `failure`,
    "message": `Underflow`, 
    // "sum": sum
};
const overflow_json = {
    "status": `failure`,
    "message": `Overflow`,     
}
const NaN_JSNON = {
    "status": `error`,
    "message": `Invalid data types`,     
}
//********************************************************* */
let asnwar_json; // to print in the home route  ("/")
//******************************** */
app.post("/add",(req,res) =>{  //************ */ // add route
    asnwar_json = {}; 
    let a = parseFloat(req.body.num1);
    let b =  parseFloat(req.body.num2);
    let sum = a + b; 
    if(a < -100000 || b < -100000){
        res.json(underflow_json)
        asnwar_json = underflow_json
    }
    if(a > 100000 || b > 100000){
        res.json(overflow_json)
        asnwar_json = overflow_json
    }
    if(isNaN(sum)){
        res.json(NaN_JSNON)
        asnwar_json = NaN_JSNON
    }    
    // console.log(req.body)
    res.json({
        "status": `success`,
        "message": `the sum of given two numbers`, 
        "sum": sum
    })
    asnwar_json = {
        "status": `success`,
        "message": `the sum of given two numbers`, 
        "sum": sum
    }
})
//*************************************************//sub
app.post('/sub',(req,res)=>{
    asnwar_json ={};
    let a = parseFloat(req.body.num1);
    let b =  parseFloat(req.body.num2);
    let sub = a - b;  
    if(a < -100000 || b < -100000){
        res.json(underflow_json)
        asnwar_json = underflow_json;
    }else if(a > 100000 || b > 100000){
        res.json(overflow_json)
        asnwar_json = overflow_json
    }else if(isNaN(sub)){
        res.json(NaN_JSNON)
        asnwar_json = NaN_JSNON
    }
    res.json({
        "status": `success`,
        "message": `the difference of given two numbers`, 
        "difference": sub
    })
    asnwar_json = {
        "status": `success`,
        "message": `the difference of given two numbers`, 
        "difference": sub
    };
})

//************************************************************** */
app.post('/multiply ',(req,res)=>{
    asnwar_json = {};
    let a = parseFloat(req.body.num1);
    let b =  parseFloat(req.body.num2);
    let  multiply  = a * b;  
    if(a < -100000 || b < -100000){
        res.json(underflow_json)
        asnwar_json = underflow_json;
    }else if(a > 100000 || b > 100000){
        res.json(overflow_json)
        asnwar_json= overflow_json;
    }else if(isNaN(multiply)){
        res.json(NaN_JSNON)
        asnwar_json = NaN_JSNON
    }
    res.json({
        "status": `success`,
        "message": `The product of given numbers`, 
        "result": multiply
    })
    asnwar_json = {
        "status": `success`,
        "message": `The product of given numbers`, 
        "result": multiply
    }
})
//*****************************************divide***** */

app.post('/divide',(req,res)=>{
    asnwar_json = {};
    let a = parseFloat(req.body.num1);
    let b =  parseFloat(req.body.num2);
    let  divide  = a / b;  
    if(a < -100000 || b < -100000){
        res.json(underflow_json)
        asnwar_json = underflow_json;
    }else if(a > 100000 || b > 100000){
        res.json(overflow_json)
        asnwar_json = overflow_json;
    }else if(isNaN(multiply)){
        res.json(NaN_JSNON)
        asnwar_json = NaN_JSNON
    }else if(b === 0){
        const num2_0 = {
            "status": `error`,
            "message": "Cannot divide by zero"
            };
        res.json(num2_0);
        asnwar_json = num2_0
    }
    res.json({
        "status": `success`,
        "message": `The division of given numbers`, 
        "result": divide
    })
    asnwar_json = {
        "status": `success`,
        "message": `The division of given numbers`, 
        "result": divide
    }
})




app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;