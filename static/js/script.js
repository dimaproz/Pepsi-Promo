const vh = window.innerHeight * 0.01 // Then we set the value in the --vh custom property to the root of the document

document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px')) // We listen to the resize event

window.addEventListener('resize', function () {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'))
})
