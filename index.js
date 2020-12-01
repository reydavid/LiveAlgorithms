//Input a string "Hello my name is Nithin";
//Step through the string
//Determine what is a word (series of characters that are separated by a space)
//Count characters in each word
//Output array of # words, #even words, #odd words [5,4,1]

var str="Hello, my name is Nithin";
var len = str.length;
var oddEven = 0;//how to determine if odd or even number of chars/word?
var odd = 0;
var even = 0;
var words = 0;
var arr = [];

countShtuff(str);

function countShtuff(){
  for (let i=0;i<len-1;i++){
    if(str[i]===" " || str[i]==='n'){
      arr.push[str[i];
    } oddEven++;
    if(oddEven%2===0){
      even++; 
    } else {
      odd++;
    }
  }
  return [words, even, odd];
}
//