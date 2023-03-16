var result = 0;
let oper;
let resultMsg = " ";
const http = require("http");
http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        let arr = req.url.split('/');
        console.log(arr);
        console.log(req.method);
        console.log(res.statusCode);

        switch(arr[1]){
            case 'sum':
                for(let i=2; i<arr.length; i++){
                    result+= parseInt(arr[i]);
                }
                oper = '+';
                break;
            case 'sub':
                result = arr[2];
                for(let i=3; i<arr.length; i++){
                    result-= parseInt(arr[i]);
                }
                oper = '-';
                break;
            case 'multi':
                result = 1;
                for(let i=2; i<arr.length; i++){
                    result*= parseInt(arr[i]);
                }
                oper = '*';
                break;
            case 'div':
                result = arr[2];
                for(let i=3; i<arr.length; i++){
                    result/= parseInt(arr[i]);
                }
                oper = '/';
                break;
        }
        for(let i=2; i<arr.length-1; i++){
            resultMsg+= arr[i]+oper;
        }
        resultMsg+= arr[arr.length-1];
        res.writeHead(200,{"content-type":"text/html"})
        res.write("the result of "+resultMsg+" = "+result);
    }
    res.end();
})
.listen("7000",()=>{
    console.log("Lisining on Port 7000");
});