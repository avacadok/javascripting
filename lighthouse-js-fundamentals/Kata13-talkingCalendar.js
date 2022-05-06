const talkingCalendar = function(date) {
  let output = "";
  const dateArr = date.split('/');
  switch(dateArr[1]){
    case "01":
      output += "January ";
      break;
    case "02":
      output += "Feburary ";
      break;  
    case "03":
      output += "March ";
      break;
    case "04":
      output += "April ";
      break;
    case "05":
      output += "May ";
      break;
    case "06":
      output += "June ";
      break;
    case "07":
      output += "July ";
      break;
    case "08":
      output += "August ";
      break;
    case "09":
      output += "September ";
      break;
    case "10":
      output += "October ";
      break;
    case "11":
      output += "November ";
      break;
    case "12":
      output += "December ";
      break;
  }
  if (dateArr[2][0]=== "0"){
    output += dateArr[2][1];
  }else{
    output += dateArr[2];
  }

  if (dateArr[2][0]=== "0" || dateArr[2][0]==="2" || dateArr[2][0] === "3"){
    if (dateArr[2][1]=== "1"){
      output += "st, ";
    }else if (dateArr[2][1] === "2"){
      output += "nd, ";
    }else if (dateArr[2][1] === "3"){
      output += "rd, ";
    }else{
      output += "th, ";
    }
  }else{
    output += "th, ";
  }
  output += dateArr[0];
  return output;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

//yyyy/mm/dd