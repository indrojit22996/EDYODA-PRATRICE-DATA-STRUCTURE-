function areRotations(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  }

  const concatenatedStr = str1 + str1;

  if (concatenatedStr.includes(str2)) {
    return true;
  }

  return false;
}

const string1 = "hello";
const string2 = "lohel";
if (areRotations(string1, string2)) {
  console.log(`${string1} and ${string2} are rotations of each other.`);
} else {
  console.log(`${string1} and ${string2} are not rotations of each other.`);
}
