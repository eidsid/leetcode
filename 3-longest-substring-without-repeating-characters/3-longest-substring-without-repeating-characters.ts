function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;
  let lastLongestSubStringLength: number = 0
  let CurrnetLongestSubStringLength: number = 0

  function checkwatchIsBig(): void {
    if (lastLongestSubStringLength < CurrnetLongestSubStringLength) {
      lastLongestSubStringLength = CurrnetLongestSubStringLength;
    }

  }

  for (let i = 0; i < s.length; i++) {

    let currentString = ""

    for (let j = i; j < s.length; j++) {

      if (!currentString.includes(s[j])) {
        currentString += s[j]
      } else {
        break;
      }
      CurrnetLongestSubStringLength = currentString.length
      checkwatchIsBig()
    }

  }


  return lastLongestSubStringLength
};