function isAnagram(s: string, t: string): boolean { 
  let sobj = {};
  let tobj = {};
  let equal = true;
  if (s.length === t.length) {
    for (let i = 0; i < s.length; i++) {
      if (typeof sobj[s[i]] == "undefined") sobj[s[i]] = 0;
      if (typeof tobj[t[i]] == "undefined") tobj[t[i]] = 0;
      sobj[s[i]] = sobj[s[i]] += 1;
      tobj[t[i]] = tobj[t[i]] += 1;
    }

    Object.entries(sobj).forEach(([key, value]) => {
      if (tobj[key] !== value) {
        equal = false;
        return;
      }
    });
    return equal;
  } else {
    return false;
  }
};