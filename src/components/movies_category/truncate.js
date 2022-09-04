const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
};

// console.log(truncateString("Hello World this is coder", 20));
