function displayCurrentDateTime() {
    const CurrentDateTime = new Date();
    alert(CurrentDateTime);
}
displayCurrentDateTime();

function greetUser(FristName, LastName) {
    const FullName = FristName + LastName;
    alert('Hello,' +FullName);
}
greetUser('John','Doe');

function addNumbers(num1,num2){
    return num1 + num2;
}
const sum =addNumbers(6,7);
console.log('Sum:',sum);

function calculator(num1,num2,operator) {
    let result;
    switch (operator) {
        case '+':
            result =num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
        case '*':
            result = num1 * num2;
            break;
            case '/':
                result = num1 / num2;
                break;
                default:
                    result ='Tnvalid operater';

    }
    return result;
}

const  result =calculator(10,5,'+');
console.log('Result:',result);

function squareNumber(number) {
    return number * number;

}
const Squared = squareNumber(4);
console.log('Square:' ,Squared );

function factorial(number){
   if(number ===0 ||number=== -1) {

       return 1; 
   }
   return number * factorial(number -1)

}
const fact = factorial(5);
console.log('factorial:', fact);

function countNumbers(start, end) {
    for(let i = start; i <= end; i++){
        console.log(i);
    }
}
countNumbers(1,5);


function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
        return side * side;
    }
    
    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    
    return hypotenuse;
}

const hypotenuseLength = calculateHypotenuse(3, 4);
console.log('Hypotenuse:', hypotenuseLength);

function calculateRectangleArea(width, height) {
    return width * height;
}

// Arguments as variables
const rectWidth = 5;
const rectHeight = 8;
const area = calculateRectangleArea(rectWidth, rectHeight);
console.log('Area:', area);





function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

const isPal = isPalindrome('Rotator');
console.log('Is Palindrome:', isPal);


function capitalizeFirstLetters(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

const sentence = 'the quick brown fox';
const capitalized = capitalizeFirstLetters(sentence);
console.log('Capitalized:', capitalized);


function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

const sentence = 'Web Development Tutorial';
const longestWord = findLongestWord(sentence);
console.log('Longest Word:', longestWord);


function countLetterOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

const count = countLetterOccurrences('JSResourceS.com', 'o');
console.log('Occurrences of "o":', count);


function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log('The circumference is ' + circumference);
}

function calcArea(radius) {
    const area = Math.PI * radius * radius;
    console.log('The area is ' + area);
}

const circleRadius = 5;
calcCircumference(circleRadius);
calcArea(circleRadius);