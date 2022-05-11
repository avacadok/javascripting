const makeCase = function(input, casingStyle) {
  casingStyle = [].concat(casingStyle);
  //create an array for casinStyle that has more than 1 style and 
  if (casingStyle.length > 1) {
    const sortingArr = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
    casingStyle.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b));
  }

  //use regex to change casing style, much easier and neater than doing nested loop
  for (let i = 0; i < casingStyle.length; i++){
    if(casingStyle[i] === "camel"){
     input = input.replace(/\s\w/g, char => char.toUpperCase()).replace(/\s/g, "");
    }else if(casingStyle[i]=== "pascal"){
      input = input.replace(/\b\w/g, char => char.toUpperCase()).replace(/\s/g, "");
    }else if(casingStyle[i] === "snake"){ 
      input = input.replace(/\s/g,"_");
    }else if(casingStyle[i]==="kebab"){
      input = input.replace(/\s/g, "-");
    }else if(casingStyle[i]==="title"){
       input = input.replace(/\b\w/g, char => char.toUpperCase());
    }else if(casingStyle[i] === "vowel"){
      input = input.replace(/[aeiou]/gi, char => char.toUpperCase());
    }else if(casingStyle[i]==="consonant"){
      input = input.replace(/[^aeiou]/gi, char => char.toUpperCase());
    }else if(casingStyle[i]==="upper"){
      input = input.toUpperCase();
    }else if(casingStyle[i]==="lower"){
      input = input.toLowerCase();
    }
  }return input;
};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));