function reverseWords(s: string): string {
  let splitedText = s.split(" ");
  for (let i = 0; i < splitedText.length; i++) {
    let word = splitedText[i].split("");

    let left: number = 0,
      right: number = word.length - 1;

    while (left < right) {
      [word[left++], word[right--]] = [word[right], word[left]];
    }
    splitedText[i] = word.join("");
  }
  return splitedText.join(" ");
}