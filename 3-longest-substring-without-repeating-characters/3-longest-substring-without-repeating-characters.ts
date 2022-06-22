function lengthOfLongestSubstring(s: string): number {
  let LongestSubStringLength: number = 0;
  let text: string = "";
  let possibleLongswap = true;
  for (let i = 0; i < s.length; i++) {
    text = "";
    if (!possibleLongswap) break;
    for (let j = i; j < s.length; j++) {
      if (!text.includes(s[j])) {
        text += s[j];
        if (text.length > LongestSubStringLength) {
          LongestSubStringLength = text.length;
        }
      } else {
        if (s.length - i < text.length) possibleLongswap =false;
        break;
      }
    }
  }
  return LongestSubStringLength;
}