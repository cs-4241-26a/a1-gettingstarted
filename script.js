const typingWord = document.querySelector('#typing')
const words = ['Sahana...', 'Her Courses...', 'Her Experiences...']

let wordIndex = 0
let characterIndex = 0
let deleting = false


function type() {
  const currentWord = words[wordIndex]

  if (deleting) {
    characterIndex--
  }else{
    characterIndex++
  }

  typingWord.textContent = currentWord.substring(0, characterIndex)

  if(!deleting && characterIndex === currentWord.length) {
    deleting = true
    setTimeout(type, 1000)
    return
  }
  
  if (deleting && characterIndex === 0) {
    deleting = false
    wordIndex = (wordIndex + 1) % words.length
  }

  const typingSpeed = deleting ? 100 : 200
  setTimeout(type, typingSpeed)
}

type()