
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

// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
// G- Find out how many steps it will take to get to 0
// init step var
// Using a for loop loop through num
// if % 2 === 0, divide by 2, else if !0 subtract and add 1 step
// 

var numberOfSteps = function(num) {
    let steps = 0;
    while(num>0){
        if(num%2 == 0){
            num/=2;
            steps += 1;
        } else if (num%2 !==0){
            num--;
            steps+=1;
        } else{
            console.log('error');
        }
        console.log(steps)
    }
    console.log(steps);
};

numberOfSteps(12868869)

// Longest common prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// G - Find the longest prefix of both words
// init char var to store common letters

// var longestCommonPrefix = function(strs) {
//     let chars = [];
//     for(let i =0; i<strs)
// };

// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// G - Find the max number of consecutive 1's
// init counter var 
// loop through array
// check if nums[i +1] === 1, if so counter++, if not counter=0
function  findMaxConsecutiveOnes(nums) {
    let counter = nums[0];
    let maxCounter = counter;;
    for(let i=0; i<nums.length; i++){
            if(nums[i+1] === 1){
            counter+=1;
            console.log('adding1')
            if(maxCounter < counter){
                maxCounter=counter;
            }
            ;
        } else if(nums[i+1] === 0){
            counter = 0
            console.log('restart!')
            
        }
        
    }
    console.log(counter)
    console.log(maxCounter)
};

findMaxConsecutiveOnes([1])

// Given an array nums of integers, return how many of them contain an even number of digits.
// G - Find the number of ints given that are even number
// init evenDig var
// loop through array, check each to see if even number

function findNumbers(nums){
let evenDig = 0;
for(let i=0; i<nums.length; i++){
    if(nums[i].toString().length % 2 ===0){
        evenDig+=1
    }else {
        continue
    }
}
console.log(evenDig)

}
findNumbers([555,901,482,1771])

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// G - return array of the squares in non-decreasing (accending)order
// init square arr
// loop through nums 
// init squared varå
// squaring each num as you go while pushing squared to square arr
// sort squaredArr by looping through arr and using iff 

// function sortedSquares(nums){
// let squaredArr = [];
// for(let i = 0; i< nums.length; i++){
//     let newSquared = nums[i]*nums[i];
//     squaredArr.push(newSquared)
// }
// console.log(squaredArr)
// let sortedArr = squaredArr.sort(function(a,b){return a-b})

// console.log(sortedArr)
// return sortedArr
// }
// sortedSquares([-4,-1,0,3,10])

// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// G - add a extra 0 at index of every 0 +1
// loop through, check if index === 0 if so splice  another 0 at the i+1 position

function duplicateZeros(arr) {
    let newArr = arr;
    let possDups = 0;
    // newArr.length = arr.length
    for(let i=0; i<=newArr.length; i++){
        if (newArr[i] === 0){
            possDups +=1
            newArr.splice(i+1, 0, 0)

            i++
        } 
        
    }
    for(let j=0; j<possDups; j++){
        if(possDups > 0){
            newArr.pop()
        }
    }



   console.log(newArr);
   console.log(newArr.length)
   console.log(arr.length)
   console.log(arr)


   console.log(possDups)
};

duplicateZeros([1,0,2,3,0,4,5,0])


// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// G - remove all occurrences of val in arr
// loop through arr
// if arr[i] === val, arr[i].splice

function removeElement(nums, val) {
    if(!nums) return 0;
    for(let i =0; i< nums.length; i++){
        if(nums[i] ===val){
            nums.splice(i, 1);
            i--
        }
    }
    return nums.length
};

removeElement([0,1,2,2,3,0,4,2], 2)


// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// G - return array with duplicates removed in ascending order and k, where k == arr.length
// loop through arr, loop through inside that loop
// if arr[i] == arr[j] =>  remove j
// return arr and arr.length

function removeDuplicates (nums) {
    var indexPointer = 1;
    for(let i = 0; i<nums.length -1; i++){
        if (nums[i] !== nums[i+1]){
            nums[indexPointer] = nums[i+1];
            indexPointer++
        }
    }
    return indexPointer;
};


removeDuplicates([0,0,1,1,1,2,2,3,3,4])

// Given an array arr of integers, check if there exist two indices i and j such that :
// G - Find out if there is 2 of the numbers in the array that multiply to make a 3rd
// loop through array [n], inside that loop again [i], inside loop a 3rd time [j]
// check if i *j =n
// if so => return true

function checkIfExist(arr) {
    for(let n=0;n< arr.length; n++){
        for(let i=1; i<arr.length; i++){
            for(let j=2; j<arr.length; j++){
                if(arr[n] === (arr[i] * arr[j])){
                    console.log('true')
                    console.log(arr[n], arr[i], arr[j])
                } else{
                    console.log('false')
                }
            }
        }
    }
    
};

checkIfExist([10,2,5,3])

// Given an array arr of integers, check if there exist two indices i and j such that :
// G - Find out if there is 1 of the numbers in the array that multiply to make a 2rd
// loop through array [n], inside that loop again [i]
// check if i *2 =n
// if so => return true

function checkIfExist(arr) {
    
    for(let n=0;n< arr.length; n++){
        let results = false;
        for(let i=0; i<arr.length; i++){
            if(arr[n] !== ( 2* arr[i])){
                console.log('false');
                console.log(arr[n], arr[i])
                i++
                // return false;
            } else{
                console.log('true');
                console.log(arr[n], arr[i])
                results = true
                // return true;
            }
        }
    if(results === true){
        console.log(results);
    } else{
        console.log('false')
    }
    }
    
};

checkIfExist([10,5,-9,15,3,8,12,-10])

// Given an array of integers arr, return true if and only if it is a valid mountain array.
// G - check to see if the array is a mountain array - ie [1,2,3,2,1]
// loop through array using 2 for loops i and j
// in each j, check if arr[j] is > than arr[i]
// if so iterate, if not check if less
// if less iterate and check if the next arr[j] > arr[i]

function validMountainArray(arr) {
    let mountainSteps= 0;
    let startOfValley = 0;
    let valleySteps = 0;
    let mountain = false;

    if(arr.length < 4 || arr[1] < arr[0]) console.log(false);

    for(let i =1; i<arr.length; i++){
        if(arr[i-1] == arr[i]){ console.log(false)};
        if(arr[i-1] > arr[i]){
            startOfValley = i-1;
            break;
        }
    }
    for (let i = startOfValley; i<arr.length -1; i++){
        if(arr[i +1] >= arr[i]){ console.log(false)};
        mountain = true
    }
    console.log(startOfValley)
console.log(mountain)
};

validMountainArray([1,2,1,2,1])


// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// G - Find the longest common prefix to the given strings
// check constraints, return false if any aren't true
// init commonPre as an empty str to store common prefix
// loop through array strings with i, j, k
// use and if statement to compare,
// if they all === push to commonPre, if not return commonPre

var longestCommonPrefix = function(strs) {
    let prefix = '';
    if (strs.length == 0) return prefix;
    for(let i =0; i< strs[0].length; i++){
        const character = strs[0][i]
        for(let j = 0; j<strs.length; j++){
            if(strs[j][i] !==character) return prefix
        }
        prefix += character
    }
    return prefix;
};


longestCommonPrefix(["dog","racecar","car"])

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// G - Merge the two lists sorted by splicing together in assending order
// init new list
// check first value of both linked lists
// Whichever is smaller, append to new list and move pointed to the next node in that list, continue

class ListNode {
    constructor(head = null) {
        this.head = head
    }
}

function mergeTwoLists(list1, list2){
    const dummy = new ListNode(-Infinity);
    let prev = dummy;

    while(list1 && list2){
        if(list1.val <= list2.val){
            prev.next = list1;
            prev = list1;
            list1 = list1.next
        } else {
            prev.next = list2;
            prev= list2;
            list2 =list2.next
        }
    }
    if(!list1) prev.next=list2;
    if(!list2) prev.next=list1;

    console.log(dummy.next)
}
mergeTwoLists([1,2,4], [1,3,4])

// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// G - reverse given string by using an inplace modifyer

function reverseString(s) {
    console.log(s.reverse())
};

reverseString(["h","e","l","l","o"])

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// G - Find the int that only appears once in the array
// init constraints
// loop through nums arr
// 

function singleNumber(nums) {
    const ht = {};
    if(nums.length<1) return 0;
    for(num of nums){
        ht[num] = ht[num] +1||1
    }
    for(const key in ht){
        if(ht[key] === 1){
            return key
        }
    }
};

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// G - Find the majority element
// init a hashtable
// loop through arr [i]
// looop through arr[i+1], and compare elements


function majorityElement(nums) {
    let ht = {};
    if(nums.length<1) return 0;
    for(num of nums){
        ht[num] = ht[num] +1||1
    }
    for(const key in ht){
        if (ht[key] > Math.floor(nums.length / 2)){
            return key
        }
    }
};

majorityElement([2,2,1,1,1,2,2,3,4,4,2,1,1,4,2])


// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.
// G - concat 2 nums arrays

function getConcatenation(nums) {
    let ans = [];
    for(let i =0; i<nums.length; i++){
        ans.push(nums[i]);
        
    };
    for(let i =0; i<nums.length; i++){
        ans.push(nums[i]);
        
    };
    console.log(ans)
};

getConcatenation([1,2,1])


// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// G - Find the running sum of arr
// init sumArr
// deal with constraints
// loop through nums 
// on each loop += every i-1

function runningSum(nums){
for(let i =0;i<nums.length; i++){
    nums[i] += nums[i-1]
}
console.log(nums)

}

runningSum([1,2,3,4])



// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// G - return arr with given order using nums and n -> half way point
// init newArr
// loop through array, add nums[0] then nums[i+n]

const shuffle = (nums, n) => {
    let newArr =[];
    for(let i =0; i<n; i++){
        newArr.push(nums[i])
        newArr.push(nums[i+n])
    }
    return newArr
}

shuffle([1,2,3,4,4,3,2,1], 4)


// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.
// G - find maximum number of words in a single sentence
// init maxWords
// loop over arr
// foreach index, count split(" ").length
// if larger than maxWords set maxWords =
// if not, next

var mostWordsFound = (sentences) =>{
    let maxWords =0;
    for(let i =0; i< sentences.length; i++){
        let wordLength = sentences[i].split(" ").length
        console.log(wordLength);
        if(wordLength > maxWords){
            maxWords=wordLength
        }
    }
    console.log(maxWords)
};

mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"])


// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
// G - Find number of good pairs
// init goodPair = []
// loop through using a for loop [i]
// loop through using another for loop [j]
// if nums[i] == nums[j] => goodPair.push(i,j)

var numIdenticalPairs = (nums) => {
    let goodPair = 0;
    for(let i =0; i<nums.length; i++){
        for(let j=1; j<nums.length; j++){
            if(i<j){
                if(nums[i] == nums[j]){
                    goodPair +=1
                }
            } 
        }
    }
    console.log(goodPair)
};

numIdenticalPairs([1,2,3,1,1,3])

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies 
// the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.
// G - Find the kids with the greatest amount of candies if given the extra
// init greatestArr = [];
// loop thourgh candies using a for loop [i]
// loop again using a for loop [j]
// check if candies[i] +3 > candies[j] => if so greatestArr.push(true) else push false


var kidsWithCandies = (candies, extraCandies) => {
    if(candies.length > 2){
        let greatestArr = [];
        for (let i = 0; i<candies.length; i++){
            let greaterArr =[]
            for(let j = 1; j<candies.length -1; j++){
                let greatIf;
                if(candies[i]+3 > candies[j]){
                    greatIf = true
                } else{
                    greatIf = false
                }
                if(greatIf === true){
                    greaterArr.push('true')
                } else {
                    greaterArr.push('false')
                }
            }
            if (greaterArr.includes('false')){
                greatestArr.push('false')
            } else {
                greatestArr.push('true')
            }
        }
        console.log(greatestArr)
    }

};

kidsWithCandies([12,1,12], 10)


