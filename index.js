module.exports = function tiny(string) {
  console.log ('in Tiny String function');
   if (typeof string !== "string") throw new TypeError("Tiny wants a string.....!.Please enter a String");
    return string.replace(/\s/g, "");
  };
  