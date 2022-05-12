// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;
// sphereVolume()will calculate the volume of a sphere given a radius
// coneVolume() will calculate the volume of a cone given a radius and a height
// prismVolume() will calculate the volume of a prism given a height, a width, and a depth
// Note


const sphereVolume = function (radius) {
  let output = (4/3) * PI * radius * radius * radius;
  return output;
}
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let num = (1/3)*PI*radius*radius*height;
  return num;
}
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let result = height*width*depth;
  return result;
}

console.log(prismVolume(3, 4, 5) === 60);
//this is how we should call the object inside an array in a function
const totalVolume = function (solids) {
  let total = 0;
  for(const solid of solids){
    if(solid.type === "sphere"){
      total += sphereVolume(solid.radius);
    }else if (solid.type === "cone"){
      total += coneVolume(solid.radius, solid.height)
    }else if (solid.type === "prism"){
      total += prismVolume(solid.height, solid.width, solid.depth)
    }
  }
  return total
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
