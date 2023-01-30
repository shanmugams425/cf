// // 1. convert number in words

// function convert_to_words(num) {
//   if (!num) {
//    return console.error("Cannot be empty");
//   }
//   let val = num.toString().split("");
//   let temp = "";
//   for (let i = 0; i < val.length; i++) {
//     var numInWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     temp += " " + numInWord[val[i]]
//   }
//   console.log(temp.slice(1));
// }

// convert_to_words();

// // 2. convert rupee to words

// var a = ["", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "];
// var b = [
//   "",
//   "",
//   "twenty",
//   "thirty",
//   "forty",
//   "fifty",
//   "sixty",
//   "seventy",
//   "eighty",
//   "ninety",
// ];


// function inWords(num) {
//   if ((num = num.toString()).length > 9) return "overflow";
//   n = ("000000000" + num)
//     .slice(-9)  //substr 
//     .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
//   if (!n) return;
//   var str = "";
//   str +=
//     n[1] != 0
//       ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
//       : "";
//   str +=
//     n[2] != 0
//       ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
//       : "";
//   str +=
//     n[3] != 0
//       ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
//       : "";
//   str +=
//     n[4] != 0
//       ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
//       : "";
//   str +=
//     n[5] != 0
//       ? (str != "" ? "and " : "") +
//       (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
//       "only "
//       : "";
//   return str;
// }
// let res = inWords(780);
// console.log(res);



// //3. Add two numbers
// let sum = 0;
// function addNum(num) {
//   let check = num.toString().split('');

//   for (let i = 0; i < check.length; i++) {
//     sum = sum + check[i];
//   }
// }

// addNum(93);
// console.log(sum);

//4. convert number into single digit
  let n = 1234;
    //Function to get sum of digits
    function getSum(n) {
        let sum = 0;
        while (n > 0 || sum > 9) {
             if(n == 0) {
                n = sum;
                sum = 0;
             }
             n = Math.floor(n / 10);
             sum = sum + n % 10;
        }
        return sum;
    }
 //function call  
    console.log(getSum(59));