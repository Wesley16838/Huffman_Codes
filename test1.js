//input from file
filename = 'infile.dat';
var input = fs.readFileSync(filename, 'utf8');

//console.log(input);
var a = Array(1);
var awei = Array(a.length);
a[0] = input.charAt(0);
awei[0] = 1;

for(var x = 1 ; x < input.length ; x++){
    if(contains(a, input.charAt(x))){
        awei[key(a,input.charAt(x))]++;
    }
    else{
        a.push(input.charAt(x));
        awei.push(1);
    }
}

console.log(a);
console.log(awei);