const organizeInstructors = function (instructors) {
  let result = {};
  for (let instructor of instructors) {
  //check if the result{} does not already contain instructor.course; 
    if (!result [instructor.course]) {
  //if the condition above is true, then we push instructor.course into 
  //result{} and set the value as an empty array
      result[instructor.course] = [];
    }
  //then push the instructor.name into the array
      result[instructor.course].push(instructor.name)
  }
  return result
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));