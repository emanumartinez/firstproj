function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile IMG")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "/avatar-light.png")
    img.setAttribute("alt", "Foto de Manu Martinez com borda escura")
  } else {
    img.setAttribute("src", "/Avatar.png")
    img.setAttribute("alt", "Foto de Manu Martinez com borda clara")
  }

}

// toggle verifica se tem o elemento, dependendo ele tira ou coloca
