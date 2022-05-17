const str="olá, mundo";
console.log(str.length);
console.log(str[2]);
console.log(str[str.length-1]);
const arr=[
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
];
console.log(arr[arr.length - 1][arr[arr.length-1].length-1]);//puxa o ultimo elemento da ultimo array

const string="o homem é o lobo do própio homem";
console.log(string.replaceAll("homem","pessoa"))