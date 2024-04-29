function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return randomNumber;
}

export default generateRandomNumber;
