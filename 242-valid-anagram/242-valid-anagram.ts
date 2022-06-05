function isAnagram(s: string, t: string): boolean {

  if(s.length!==t.length) return false

  let sorteds=[...s].sort().join('')
  let sortedt=[...t].sort().join('')
return  sorteds==sortedt
  
};