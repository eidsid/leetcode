function reverseWords(s: string): string {
  let splited = s.split(' ')
  for (let i = 0; i < splited.length; i++) {
    let word = splited[i].split('')
    let left: number = 0, right: number = word.length - 1;
    while (left < right) {
      [word[left++], word[right--]] = [word[right], word[left]]

    }
    splited[i] = word.join('')


  }
  return splited.join(' ')
};