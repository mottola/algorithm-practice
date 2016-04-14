 Write a
 function which takes an array of numbers and returns the minimum of that array.
 [3, 4, 5] - > 3[2, -30] - > -30

 function minimum(arr) {
     var minSoFar = arr[0]; // keep the variable which stores the number ABOVE the for loop!
     for (var i = 1; i < arr.length; i++) { // MEMORIZE! This is the code for stepping through an array!
         if (arr[i] < minSoFar) {
             minSoFar = arr[i];
         }
     }
     return minSoFar;
 }

 console.log(minimum([3, 4, 5]) == 3);
 console.log(minimum([2, -30]) == -30);
 console.log(minimum([-4, 45, 90]) == -4);
 console.log(minimum([0]) == 0);


 Write a
 function which takes an array and returns maximum of that array

 function maximum(arr) {
     var maxSoFar = arr[0]; // keep the variable which stores the number ABOVE the for loop!
     for (var i = 1; i < arr.length; i++) { // MEMORIZE! This is the code for stepping through an array!
         if (arr[i] > maxSoFar) {
             maxSoFar = arr[i];
         }
     }
     return maxSoFar;
 }

 console.log(maximum([3, 4, 5]) == 5);
 console.log(maximum([2, -30]) == 2);
 console.log(maximum([-4, 45, 90]) == 90);
 console.log(maximum([0]) == 0);

 function averageOfSet(arr) {
     "use strict";
     var sumSoFar = arr[0];
     for (var i = 1; i < arr.length; i++) {
         sumSoFar += arr[i];
         var average = (sumSoFar / arr.length);
     }
     return average;
 };
 //console.log(average);
 console.log(averageOfSet([2, 4, 6]) == 4);
 console.log(averageOfSet([12, 6, 36, 18, 24, 30]) == 21);

 function missingNumber(arr) {
     if (arr.length == 1) {
         return arr[0] + 1;
     }
     for (var i = 0; i < arr.length; i++) {
         var currentNumber = arr[i];
         var newNumber = currentNumber + 1;
         if (arr[i + 1] != newNumber) {
             return newNumber;
         }
     }
 }


 console.log(missingNumber([1, 2, 3, 5]) == 4);
 console.log(missingNumber([1, 2, 4]) == 3);
 console.log(missingNumber([1, 2, 3, 4, 5, ]) == 6);