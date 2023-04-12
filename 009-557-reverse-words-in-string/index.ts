export default function reverseWords(s: string): string {
  const wordArray = s.split(' ')
  let reversedWords = ''
  for (let i = 0; i < wordArray.length; i++) {
    const reversedWord = reverseWord(wordArray[i])
    reversedWords += reversedWord + ' '
  }
  return reversedWords.slice(0, s.length)
};

function reverseWord(word: string): string {
  let [leftPointer, rightPointer] = [0, word.length - 1]
  const charArray = word.split('')
  while(leftPointer < rightPointer) {
    const tempChar = word[leftPointer]
    charArray[leftPointer++] = charArray[rightPointer]
    charArray[rightPointer--] = tempChar
  }
  return charArray.join('')
}