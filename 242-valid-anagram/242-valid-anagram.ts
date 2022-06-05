function isAnagram(s: string, t: string): boolean {

  let isAnagram=true; 
  
  if(s.length!==t.length) return !isAnagram

  let sorteds=[...s].sort()
  let sortedt=[...t].sort()


  for (let i = 0; i < s.length; i++) {
   
    if(sorteds[i]!==sortedt[i]) {
      isAnagram=false;
      break;}   

}
  return isAnagram
};