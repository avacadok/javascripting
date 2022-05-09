const calculateChange = function(total, cash) {
  let output = {};
  let change = cash - total;
  while(change > 0){
    if (change >= 2000){
      output.twentyDollar = output.twentyDollar + 1 || 1;
      change -= 2000;
    }else if(change >= 1000){
      output.tenDollar = output.tenDollar + 1 || 1;
      change -= 1000;
    }else if(change >= 500){
      output.fiveDollar = output.fiveDollar + 1 || 1;
      change -= 500;
    }else if(change >= 200){
      output.twoDollar = output.twoDollar + 1 || 1;
      change -= 200;
    }else if (change >= 100){
      output.oneDollar = output.oneDollar + 1 || 1;
      change -= 100;
    }else if (change >= 25){
      output.quarter = output.quarter + 1 || 1;
      change -= 25;
    }else if (change >= 10){
      output.dime = output.dime + 1 || 1;
      change -= 10;
    }else if (change >= 5){
      output.nickel = output.nickel + 1 || 1;
      change -= 5;
    }else{
      output.penny = output.penny + 1 || 1;
      change -= 1;
    }
  }return output;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));