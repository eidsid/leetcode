function lengthOfLongestSubstring(s: string): number {
  let LongestSubStringLength: number = 0;
  let text: string = "";
  for (let i = 0; i < s.length; i++) {
    text = "";
    for (let j = i; j < s.length; j++) {
      if (!text.includes(s[j])) {
        text += s[j];
        if (text.length > LongestSubStringLength) {
          LongestSubStringLength = text.length;
        }
        // console.log(text, s[j], LongestSubStringLength);
      } else {
        break;
      }
    }
  }
  return LongestSubStringLength;
}
