var result;
let oper;
const http = require("http");
http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        let arr = req.url.split('/');
        console.log(arr);
        console.log(req.method);
        console.log(res.statusCode);

        switch(arr[1]){
            case 'sum':
                result = parseInt(arr[2])+parseInt(arr[3]);
                oper = '+';
                break;
            case 'sub':
                result = arr[2]-arr[3];
                oper = '-';
                break;
            case 'multi':
                result = arr[2]*arr[3];
                oper = '*';
                break;
            case 'div':
                result = arr[2]/arr[3];
                oper = '/';
                break;
        }
        res.writeHead(200,{"content-type":"text/html"})
        res.write("the result of "+arr[2]+oper+arr[3]+" = "+result);
    }
    res.end();
})
.listen("7000",()=>{
    console.log("Lisining on Port 7000");
});