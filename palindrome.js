// Get elements from the DOM
const inputField = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

// Function to clean the input string
const cleanInputString = str => {
    const lowerCaseStr = str.toLowerCase();
    const regex = /[^a-z0-9]/g;
    return lowerCaseStr.replace(regex, '');
};

// Function to get and clean the input string
const getStringFromInput = (str) => {
    if (str.trim() === '') {
        return null; // Return null for empty input
    } else {
        return cleanInputString(str); // Return cleaned string
    }    
};

// Function to check if the cleaned string is a palindrome
const isPalindrome = (originalStr) => {
    const cleanStr = cleanInputString(originalStr); // Clean the original input string
    const reverseStr = cleanStr.split('').reverse().join(''); // Reverse the cleaned string

    // Use originalStr in the result message
    return reverseStr === cleanStr ? `<strong>${originalStr}</strong> is a palindrome` : `<strong>${originalStr}</strong> is not a palindrome`;
}

// Event listener for button click
checkBtn.addEventListener('click', () => {
    const inputStr = inputField.value; // Get value when button is clicked
    const cleanedInput = getStringFromInput(inputStr); // Clean the input before checking
    
    if (cleanedInput === null) { // Check if cleaned input is null (i.e., input was empty)
        alert('Please input a value'); // Alert if the input is empty
        result.innerHTML = ''; // Clear any previous result
    } else {
        const palindromeResult = isPalindrome(inputStr); // Pass the original input to the palindrome check
        result.innerHTML = palindromeResult; // Display the result in the result element
    }

    inputField.value = ''; 
});

// Event listener for the Enter key
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Check if the pressed key is Enter
        checkBtn.click(); // Trigger the click event on the button
    }
});