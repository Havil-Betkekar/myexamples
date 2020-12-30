/*const word = 'stressed';
let reversedword = '';

for( let i = word.length - 1; i>=0; i--) {

    reversedword += word[i];
    console.log(reversedword);
}

*/

function isValidFunction(password,username){
if(password.length < 8){
 return false;

}
if(password.indexOf(' ') !== -1){
    return false;

}
if(password.indexOf('username') !== -1){
    return false;

}
return true;

}