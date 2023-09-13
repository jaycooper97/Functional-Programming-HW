//1. Sort an Array Alphabetically using the sort Method

/*function alphabeticalOrder(arr) {
return arr.sort(function(a, b){
  return a === b ? 0 : a < b ? -1 : 1;
});
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);*/


//2. Return a Sorted Array Without Changing the Original Array

const globalArray = [5, 6, 3, 2, 9];

/*function nonMutatingSort(arr) {
  return [].concat(arr).sort(function(a, b){
    return a - b;
  });
};

nonMutatingSort(globalArray);*/



//3. Split a String into an Array Using the split Method

/*function splitify(str) {
    return str.split(/\W/);
}
  splitify("Hello World,I-am code");





//4. Combine an Array into a String Using the join Method

function sentensify(str) {
 return str.split(/\W/).join(" "); 
  }
  
  sentensify("May-the-force-be-with-you");*/





//5. Apply Functional Programming to Convert Strings to URL Slugs
/*function checkPositive(arr) {
  arr.every(function(value) {
    return value > 0;
  })
}

checkPositive([1, 2, 3, -4, 5]);*/





//6. Use the every Method to Check that Every Element in an Array Meets a Criteria
/*function checkPositive(arr) {
  return arr.every(function(value) {
    return value > 0;
  })
}

checkPositive([1, 2, 3, -4, 5]);*/



//7. Use the some Method to Check that Any Elements in an Array Meet a Criteria
/*function checkPositive(arr) {
  return arr.some(function(value){
    return value > 0;
  })
}

checkPositive([1, 2, 3, -4, 5]);*/



//8. Introduction to Currying and Partial Application
/*function add(x) {
 return function(y) {
  return function(z) {
    return x + y + z;
  }
 }
}

add(10)(20)(30);*/