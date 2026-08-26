document.querySelectorAll('h1, h2').forEach(function(heading) {
  heading.addEventListener('mouseover', function() {
    this.style.color = 'crimson'
  })

  heading.addEventListener('mouseout', function() {
    this.style.color = ''
  })
})