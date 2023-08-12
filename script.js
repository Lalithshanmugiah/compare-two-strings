//compare two strings

let string1 = 'javascript one';
let string2 = 'Javascript two';

//compare both strings

const result = string1.toUpperCase === string2.toUpperCase;

if(result){
    console.log('the strings are similar');
}else{
    console.log('the strings are not similar');
}