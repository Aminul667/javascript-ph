function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
  if (marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
    return "Jim";
  } else if (marksOfDela > marksOfJim && marksOfDela > marksOfChinku) {
    return "Dela";
  }
  return "Chinku";
}

console.log(JimOrDelaOrChinku(84, 99, 77));
