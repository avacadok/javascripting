const instructorWithLongestName = function(instructors) {
  let longest = "";
  let index = -1;
  let object;
  for(let i = 0; i < instructors.length; i++) {
    let teacherName = instructors[i].name;
    if(longest.length < teacherName.length) {
      longest = teacherName;
      index = longest.indexOf(longest[i]);
      object = instructors[index];
    }
  }
  return object;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));