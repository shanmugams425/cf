// function convert_to_words(num) {
//   let val = num.split("").length;

//   //   if (!val) {
//   //     console.log("Cannot be empty");
//   //   } else {
//   let single_digits = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   var temp = "";
//   for (let i = 0; i < val; i++) {
//     temp = temp + " " + single_digits[num.charCodeAt(i) - 48];
//   }
//   console.log(temp);
// }
// //}
// convert_to_words("55");


function convert_to_words(num) {
  let val = num.split("").length;

  //   if (!val) {
  //     console.log("Cannot be empty");
  //   } else {
  let single_digits = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var temp = "";
  for (let i = 0; i < val; i++) {
    temp = temp + " " + single_digits[num.charCodeAt(i) - 48];
  }
  console.log(temp);
}
//}
convert_to_words("55");

