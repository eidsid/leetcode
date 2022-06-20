function reverseWords(s: string): string {
  let splitedText = s.split(' ')
  for (let i = 0; i < splitedText.length; i++) {
    let word = splitedText[i].split('').reverse().join('')
    splitedText[i] = word
  }
  return splitedText.join(' ');
};