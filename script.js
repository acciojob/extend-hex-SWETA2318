function extendHex(shortHex) {
  // Remove '#' if it exists
  shortHex = shortHex.replace('#', '');

  // Make sure the input is a valid short hex code
  if (shortHex.length !== 3 && shortHex.length !== 6) {
    console.error('Invalid short hex code');
    return null;
  }

  // If the input is a short hex code with 3 characters, duplicate each character
  if (shortHex.length === 3) {
    shortHex = shortHex.split('').map(char => char + char).join('');
  }

  // Add '#' prefix and return the extended hex code
  return '#' + shortHex.toUpperCase();
}

// Examples
console.log(extendHex("#abc"));   // Output: "#aabbcc"
console.log(extendHex("abc"));    // Output: "#aabbcc"
console.log(extendHex("#AbC"));   // Output: "#AABBCC"
console.log(extendHex("#f09"));   // Output: "#ff0099"alert(extendHex(shortHex));
