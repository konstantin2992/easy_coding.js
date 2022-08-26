function isPrime(number) {
    if (number % 2 == 0) {
        alert(false)
        
    } else{
        alert(true)
    }
}
//*********************************************************************//
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1
    
}
//*********************************************************************//
function fibonacci(n) {
   return (n <= 1) ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
    
}
//*********************************************************************//
([])
([3, 9, -3, 10])
let isSorted = [-Infinity, -5, 0, 3, 9]                        
function isSort(a, b) {
    if (a > b) {
    return 1;
    } else if (b > a) {                   //****************************СОМНИТЕЛЬНОЕ РЕШЕНИЕ******************************//
    return -1;
    } else {
    return 0;
    }
    }
    isSorted.sort(isSort);

//*********************************************************************//
function reverse(str) {
    let result = ``
    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i)
    } return result
    
}//*********************************************************************//













//*********************************************************************//
function isPalindrome(str) {
  let re = /[^A-Za-z0-9]/g;
  let lowStr = str.toLowerCase().replace(re, '');
  let revStr = lowStr.split('').reverse().join(''); 
  return revStr === lowStr;
}
isPalindrome('')                                
isPalindrome('abcdcba')                         
isPalindrome('abcd')                            
isPalindrome('A man a plan a canal Panama')
//*********************************************************************//
function missing(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let total = (arr.length + 1) * arr.length / 2;
   let result = sum - total
   console.log(result)
}
/********НЕПРАВИЛЬНО********
function isBalanced(str) {
    let openingBrackets = 0
    let closingBrackets = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == `(` && str[i] == `{`) {
            openingBrackets += str[i]
        } else if (str[i] == `)` && srt[i] == `}`) {
            closingBrackets += str[i]
        }
        return openingBrackets.length == closingBrackets.length && openingBrackets === closingBrackets
    
}
}
**********НЕПРАВИЛЬНО*********/
