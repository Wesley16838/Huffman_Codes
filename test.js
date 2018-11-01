var readlineSync = require('readline-sync');
var fs = require('fs'); 
//input from file
filename = 'infile.dat';
var input1 = fs.readFileSync(filename, 'utf8');
var punctuationless = input1.replace(/[^\w\s]|_/g, "");
var finalString = punctuationless.replace(/\s+/g, "");
var res = finalString.split("");

let arr1=[];
let arr2=[];
let arr3=[];

for(i=0;i<res.length;i++){
    // console.log(finalString.charAt(i));
    if(arr1.includes(finalString.charAt(i))){
        // console.log('True');
        arr2[arr1.indexOf(finalString.charAt(i))]++;
    }else{
        // console.log('false');
        arr1.push(finalString.charAt(i));
        arr2.push(1)
    }
}
for(j=0;j<arr1.length;j++){
    arr3[j]=[arr1[j],arr2[j]];
}

console.log(arr3);

