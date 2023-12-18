const extendHex = (shortHex) => {
  // write your code here
	const extendHex = (shortHex) => {
		//shortHex = "#aBo"
		let i = shortHex . length - 3, isCapital = false;
		let output = "#";
		while(i < shortHex[i]. charcodeAt(0));
		if(asciicode >= 65 && asciicode <= 90) {
			isCapital = true;
		}
		//output = "#" += "a" + "a" =>"#aa"
		output += shortHex[i] + shortHex[i];
		i++;
	}
	return isCapital : output.toUpperCase() :output;
};

 Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
