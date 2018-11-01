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
let arr=[];

for(i=0;i<res.length;i++){
   
    if(arr1.includes(finalString.charAt(i))){
       
        arr2[arr1.indexOf(finalString.charAt(i))]++;
    }else{
       
        arr1.push(finalString.charAt(i));
        arr2.push(1)
    }
}

let total=0;
for(j=0;j<arr1.length;j++){
    arr[j]=[arr1[j],arr2[j]];
    total=total+arr[j][1];
    // console.log(arr[j][1]);
    // console.log(total);
}
console.log('Symbol'+' '+'Frequency');
for(k=0;k<arr1.length;k++){
    let num=new Number((arr[k][1]/total)*100);
    console.log('  '+arr[k][0]+',        '+num.toFixed()+'%');
}
console.log('Symbol'+' '+'Huffman Codes');

//Input infile.dat
// let input = fs.readFileSync('infile.dat','utf8');
// var res = input.split(",");

// Create forest table
let forest = [];

// Create forest root ptr
let forest_root = null;

// for final tranverse
let str = "";

// Create Node abstract for forest
class Node {
    constructor(symbol, weight) {
        this.left = null;
        this.right = null;
        this.symbol = symbol;
        this.weight = weight;
    }
}

// Sort the letter table by feq (asc)
arr.sort(function (a, b) { return a[1] - b[1] });

// Create nodes from letter table to forest table
for (let i = 0; i < arr.length; i++) {
    let tNode = new Node(arr[i][0], arr[i][1]);
    forest.push(tNode);
}

function huffman() {
    while (forest.length > 1) {
        // Sort the forest table by feq (asc) after each new push
        forest.sort(function (a, b) { return b.weight - a.weight });

        // Extract the first and second smallest feq from forest table
        let XS = forest.pop();
        let S = forest.pop();

        // Create new node that the feq = XS's feq + S's feq for forest Table
        let forestTmp = new Node('null', XS.weight + S.weight);
        forestTmp.left = XS;
        forestTmp.right = S;
        forest.push(forestTmp);
    }

    forest_root = forest[0];
}

// Print out each path from node to leafs
let arr4=[];
function printPaths(root, way) {
   
    if (root == null)
        return;

    if (way == 'left')
        str += '0';
    else if (way == 'right')
        str += '1';

    if (root.left == null && root.right == null) {
        arr4.push(str);
        console.log('  '+root.symbol + ',        ' + str);
        str = str.slice(0, -1);
    }
    else {
        printPaths(root.left, 'left');
        printPaths(root.right, 'right');
        str = str.slice(0, -1);
    }
   
}

huffman();
printPaths(forest_root, '0');
let totalbit=0;
for(l=0;l<arr4.length;l++){
    totalbit=totalbit+(arr4[l].length*arr[l][1]);
}
console.log('Total Bits:'+totalbit);
// console.log(arr4);
