
// Write a template string according to the following example:
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
//const string1 = `Their names were: ${a}, ${b}, and ${c}.`

// modify the template variable to be a template string 
function format(a, b, c) {
    // the result string must give: "Their names were: a, b and c."
        const template = `Their names were: ${a}, ${b} and ${c}.`
        return template
    }


// Scientists have discovered that in four decades, the world will EXPLODE! It will also 
// take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.    

//Q- How many people will there be in three decades
// 3 decades => 360 months
// mult months x n => total new
// add to current var


function futurePeople(population, n) {
    let a = n*360;
    let total = population + a;
    return total

}


// Create a function that accepts an array and returns the last item in the array.
//Q - Show the last item in the array
// get arr length -1
// return index of last item

function getLastItem(arr) {
	const arrLen = arr.length -1;
    return arr[arrLen]
}

// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as 
// input and calculates the area of that shape.
// Area of a triangle is 0.5 * b * h
// Area of a parallelogram is b * h
// Assume triangle and parallelogram are the only inputs for shape.

//Q - What is the area of the shape?
//take shape input
// based upon shape input plug B and H into area formula

function areaShape(base, height, shape) {
	if(shape === 'triangle'){
        return (0.5 * base * height)
    } else if(shape === 'parallelogram'){
        return ( base * height)
    } else {
        return "Error, incorrect shape given"
    }
}

// Write a function that returns true if a year is a leap, otherwise return false.
// A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shortest month, 
// creating February 29.

// A leap year occurs every four years, and will take place if the year is a multiple of four. The exception to this is a year at the beginning 
// of a century (for example, 1900 or 2000), where the year must be divisible by 400 to be a leap year.

// Q - Is given year a leap year?
// Check for a remainder for year / 4
// if so check if year is a beginning of a century
// if eith true, return true, else, return false

function leapYear(year) {
	if (year%4 ===0 || year%100 ===0){
        console.log("true")
    } else{
        console.log('false')
    }

}
leapYear(2300);


// Create a function that takes an array of numbers or letters and returns a string.


function arrayToString(arr) {
	let a = arr.join('');
    return a;
}

// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
//Take num and decide if it is even/odd by using %2
// if odd=> return even, and if even => return odd
// misread!!


function isEvenOrOdd(num) {
	if(num%2 === 0){
        return ('odd')
    } else{
        console.log('even')
    }
}

isEvenOrOdd(10)

// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.
// G - remove n elements from the front of the array
function drop(arr, val = 1) {
    return (arr.slice(val))
}

drop([1, 2, 3], 0)

// Create a function that takes an array and a string as arguments and returns the index of the string.
// G - find the index of the given string in the given array

function findIndex(arr, str) {
	console.log(arr.indexOf(str))
}

findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f')





// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function 
// to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// G - Find the word based upon the rules given
// match based upon lowercase

function detectWord(str) {
	const lowerRules = /[a-z]/g;
	const wordArr = str.match(lowerRules);
    return wordArr.join('');
}

detectWord("UcUNFYGaFYFYGtNUH")


// Create a function that finds the index of a given item.
// find the index 
// if index isnt there, return -1

function search(arr, item) {
	return arr.indexOf(item);
}

// Create a function to concatenate two integer arrays.


function concat(arr1, arr2) {
	return arr1.concat(arr2)
	}





// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// G - which numbers add to hit the target number
// loop through nums using two loops


var twoSum = function(nums, target) {
    for(let i=0; i< nums.length; i++){
        for(let j = i+1; j<nums.length; j++ ){
            let sum = nums[i] + nums[j]
            if(sums = target){
                return[i,j]
            }
        }
    }
};

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// G - Find out if palindrome
// take x, turn into a string split intor arr,reverse arr, join, and compare to x

function isPalindrome1(x){
    let z = toString(x)
    console.log(z)
    let y = z.split('')
        .reverse().join();
    console.log(y)    
    let q = parseFloat(y)     
    console.log(q)
    if(q === x) {
        console.log('true')
    } else {
        console.log('false')
    }
    
}

// 

isPalindrome1(121)

function isPalindrome(x){
    let text = x.toString();
    for(let i=0; i< text.length/2; i++){
        if(text.charAt(i) != text.charAt(text.length-1-i))
        {
            console.log('false')
        } 
    }
    console.log('true')
}
isPalindrome(1221)

// Given a roman numeral, convert it to an integer.
// init keys based upon roman numerals
// init [] of ints
// loop through s converting as you go and sending numbers into arr
// when finished add numbers

// function romanToInt(s){
//     let key = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
//     let ans = [];

//     for( let i =0; i<s.length; i++){
//         if(key[s[i]] < key[s[i +1]]) {
//             // subtract it
//             ans.push(key[s[i +1]] - key[s[i]]);
//             i++;
//             continue;
//         }
//         else{
//             // add to arr
//             ans.push(key[s[i]])

//         }
//     }
//     return ans.reduce((total, current) => total+current)

// }

// romanToInt('I')
// romanToInt('III')
// romanToInt('IV')
// romanToInt('IX')
// romanToInt('LVIII')
// romanToInt('MCMXCIV');
// romanToInt('MMMCMXCIX')

// G- find out the value of the roman numeral
// init key based un given info along with a arr for the sums
// use for loop to tell if the first letter is one that would cause it to subtact

function romanToInt(s){
let key ={ I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }
let ans =[];

for(let i=0; i<s.length; i++){
    if(key[s[i]] < key[s[i+1]]){
        // subtract
        ans.push(key[s[i+1]] - key[s[i]]);
        i++;
        continue;
    } else{
        // add
        ans.push(key[s[i]])
    }
    console.log(ans.reduce((total, current) => total + current))
}


}

romanToInt('I')
romanToInt('III')
romanToInt('IV')
romanToInt('IX')
romanToInt('LVIII')
romanToInt('MCMXCIV');
romanToInt('MMMCMXCIX')




// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// G - find is there a common prefix, if so what is it, if not return empty string
//init arr to hold characters,
// loop through to pull the 0 index of each string
// check to see if they are the same
// repeat until not the same
// return the arr


// var longestCommonPrefix = function(strs) {
//     let chars = [];
//     for(var i =0; i<strs.length; i++){
//         var tmpChar = strs[0[i]];
//         for(var j=o; j<strs.length; j++){
//             if(strs[k].length )
//         };
        
        
//         console.log(strs[i][0]);
//         if(strs[i[0]] ===strs[i+1[0]] ){
//             console.log('equal')
//             chars.push(strs[i[0]])
//             console.log(chars)
//         }
        
//     }
// };

// longestCommonPrefix(["flower","flow","flight"])


// Running sum not a find the sum!!
// G - find the running sum
// running sum is the sum of each number of the index with the prev indexes added to it

var runningSum = function(nums){
    for(let i = 1; i< nums.length; i++){
            nums[i] += nums[i-1];
    }
    return nums
}
runningSum([1, 2, 3, 4])



// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
// G - find who the richest customer is
// init global var to take highest sum
// foreach customer => init currWealth, loop though that customer and add sum to currWealth
// compare to maxWealth
// if larger replace

var maximumWealth = function(accounts) {
    var maxWealthSoFar = 0;

    accounts.forEach(customer => {
        let currCustWealth = 0;
        customer.forEach(bank =>{
            currCustWealth += bank
            console.log(currCustWealth);
            if(currCustWealth > maxWealthSoFar){
                maxWealthSoFar = currCustWealth
            }
        })
        // customer.reduce();

        
    });
return maxWealthSoFar

};

maximumWealth([[2,8,7],[7,1,3],[1,9,5]])


// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
// G - print out the given string, returning fizz if / by 3, buzz if / 5, fixxBuzz if / by both, or the int(as a str) if neither / by 3 or 5
// loop though n using if statements

function fizzBuzz(n){
    let answer = '';
    for(let i =1; i<=n; i++){
        let ans = '';
        if(i%5 === 0 &&  i % 3 === 0){
            ans+= 'FizzBuzz, ';
        }
        else if ( i % 3 === 0 ){ 
            ans +='Fizz, ';
        }
        else if (i%5 === 0 ){
            ans += 'Buzz, ';
        }
        else { 
            ans += i +', ';
        }
        answer += ans
    }
    console.log(answer)    
};



fizzBuzz(15)
