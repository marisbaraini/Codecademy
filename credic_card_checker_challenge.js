//CREDIT CARD CHALLENGE - CODEACADEMY

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];


// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// Array of all the arrays above
const batch = [valid1, valid2, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

function validateCred(array) {
   let newArray = array.slice()
   for (let i = newArray.length - 1; i >= 0; i--){
       if (i % 2 === 0){
           let double = newArray[i] * 2;
           if (double > 9){
               newArray[i] = double - 9
           } else {
               newArray[i] = double
           }
       }
   }
   let sum = 0
   for (let i = 0; i < newArray.length; i++){
       sum = sum + newArray[i]
   }
   if (sum % 10 === 0){
       return true
   } else {
       return false
   }
}


// findInvalidCards() checkS through the nested array for which numbers are invalid, and return another nested array of invalid cards.
function findInvalidCards(nestedArray){
   let invalids = []
   for (let i = 0; i < nestedArray.length; i++){
       if (validateCred(nestedArray[i]) === false){
           invalids.push(nestedArray[i])
       }
   }
   return invalids
}

// idInvalidCardCompanies() returns an array of companies that have mailed out cards with invalid numbers, without duplicates.
function idInvalidCardCompanies(nonValid){
   let companies = []
   for (let i = 0; i < nonValid.length; i++){
       if (nonValid[i][0] === 3){
           if (companies.includes('Amex') === false) {
               companies.push('Amex')
           }
       } else if (nonValid[i][0] === 4){
           if (companies.includes('Visa') === false) {
               companies.push('Visa')
           }
       } else if (nonValid[i][0] === 5){
           if (companies.includes('Mastercard') === false) {
               companies.push('Mastercard')
           }
       } else if (nonValid[i][0] === 6){
           if (companies.includes('Discover') === false) {
               companies.push('Discover')
           }
       } else {
           if (companies.includes('Company not found') === false) {
               companies.push('Company not found')
           }
       }
   }
   return companies
}


let invalids = findInvalidCards(batch)
console.log(idInvalidCardCompanies(invalids))
