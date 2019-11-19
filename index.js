module.exports = function tiny(string) {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string.....!.Please enter a String");
    return string.replace(/\s/g, "");
  };
  