// 3. Longest Substring Without Repeating Characters
// Medium  24%

// Given a string, find the length of the longest substring without repeating
// characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the
// answer must be a substring, "pwke" is a subsequence and not a substring.

// Given "dvdf", the answer is "vdf", which the length is 3.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const n = s.length, hash = {}
  let result = 0
  for (let i = 0, j = 0; i < n; i++) {
    if (hash[s[i]]) j = Math.max(hash[s[i]], j)
    result = Math.max(result, i - j + 1)
    hash[s[i]] = i + 1
  }
  return result
}

;[
  'abcabcbb',                   // 3
  'bbbbb',                      // 1
  'pwwkew',                     // 3
  'c',                          // 1
  'dvdf',                       // 3
].forEach(s => {
  console.log(lengthOfLongestSubstring(s))
})

