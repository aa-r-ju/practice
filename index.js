//  Longest Common Prefix

function longestCommonPrefix(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);

      if (prefix === "") return "";
    }
  }

  return prefix;
}

Input: strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
