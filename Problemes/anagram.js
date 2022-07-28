function isAnagram(stringA, stringB) {
    // Sanitizing
    stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
    stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");
  
    // sorting
    const stringASorted = stringA.split("").sort().join("");
    const stringBSorted = stringB.split("").sort().join("");
  
    return stringASorted === stringBSorted;
  }

  console.log(isAnagram("Heart", "Earth"));
