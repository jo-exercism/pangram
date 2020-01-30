//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (pangramString) => {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let pangramArray = pangramString.toLowerCase().split("");
  let result = letters.split("").find(letter => !pangramArray.includes(letter))
  if(result) {
    return false;
  } else {
    return true;
  }
};
