function lengthOfLongestSubstring(s: string): number {
  let LongestSubStringLength: number = 0
  for (let i = 0; i < s.length; i++) {
    let currentString = ""
   
    for (let j = i; j < s.length; j++) {

      if (!currentString.includes(s[j])) {
        currentString += s[j]
      
        if (LongestSubStringLength <= currentString.length) {
          LongestSubStringLength = currentString.length;
        }

      }
      else {
        break;
      }

    }

  }
  return LongestSubStringLength
};