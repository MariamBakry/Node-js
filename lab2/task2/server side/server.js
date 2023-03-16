const http = require("http");
const fs = require("fs");

let MainFileHTML = fs.readFileSync("../client side/main.html").toString();
let WelcomeFileHTML = fs.readFileSync("../client side/welcome.html").toString();
let StyleCSS = fs.readFileSync("../client side/style.css").toString();
let ScriptFile = fs.readFileSync("../client side/script.js").toString();


var userName = "";
var mobileNum = "";
var email = "";
var address = "";

http.createServer((req,res)=>{
    //#region GET
    if(req.method == "GET"){
            switch(req.url){
                case "/main.html":
                    res.write(MainFileHTML);
                break;
                case "/welcome.html":
                    res.write(WelcomeFileHTML);
                break;
                case "/style.css":
                    res.writeHead(200,"Ok",{"content-type":"text/css"})
                    res.write(StyleCSS)
                break;
                case "/script.js":
                    res.writeHead(300,"Hii",{"content-type":"text/javascript"})
                    res.write(ScriptFile)
                break;
                default:
                    res.write("<h1>No Page Found</h1>")
                break;
            }
            res.end();
    }
    //#endregion
    //#region POST

    else if(req.method == "POST"){//url
        req.on("data",(data)=>{
            console.log(data);
            userName = data.toString().split("=")[1].split("+")[0].split("&")[0];
            mobileNum = data.toString().split("=")[2].split("&")[0];
            email = data.toString().split("=")[3].split("&")[0];
            email = decodeURIComponent(email); //عشان يرجع يحط ال@
            address = data.toString().split("=")[4];
        })
        req.on("end",()=>{

            WelcomeFileHTML = WelcomeFileHTML.replace("{clientName}",userName);
            WelcomeFileHTML = WelcomeFileHTML.replace("{MobileNumber}",mobileNum);
            WelcomeFileHTML = WelcomeFileHTML.replace("{Email}",email);
            WelcomeFileHTML = WelcomeFileHTML.replace("{Address}",address);
            res.write(WelcomeFileHTML)
            res.end();
        })
    }
    //#endregion
    //#region PUT
    
}).listen("7001", ()=>{console.log("http://localhost:7001")});
