//CHALLENGE 1

// let student = {
//   id: 1,
//   name: "Seth",
//   age: 28,
//   dob: {
//     place: "Hong Kong",
//     date: "08/31/1995",
//   },
//   gradesCompleted: ["9th", "10th", "11th", "12th"],
//   deleteMe: "ha ha",
// };

// console.log(student);
// delete student.deleteMe;
// console.log(student);

//CHALLENGE 2

// let user = {
//   firstName: "Seth",
//   lastName: "Gartz",
//   city: "Provo",
//   semesters: {
//     semesterOne: "incomplete",
//     semesterTwo: "incomplete",
//     semesterThree: "incomplete",
//     semesterFour: "incomplete",
//   },
// };

// user.semesters.semesterOne = "complete";
// user.semesters.semesterTwo = "complete";
// user.semesters.semesterThree = "complete";
// user.semesters.semesterFour = "complete";

// delete user.semesters.semesterFour;

// user.favoriteLanguage = "Javascript";
// console.log(user);

//CHALLENGE 3

const myArray = [1, 2, 3, 4, 5];
const lengthOfArray = myArray.length;
let alternator = 0;
for (i = 0; i <= lengthOfArray; i++) {
  if (alternator === 0) {
    console.log(myArray.shift());
    alternator = 1;
  } else {
    console.log(myArray.pop());
    alternator = 0;
  }
}
