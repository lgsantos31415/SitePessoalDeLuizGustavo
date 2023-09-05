function toggleMode() {
  html = document.documentElement
  html.classList.toggle("light")

  img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/pt-light.jpg")
    img.setAttribute(
      "alt",
      "Foto de Luiz sorrindo usando camisa jeans, barba e fundo preto"
    )
  } else {
    img.setAttribute("src", "./assets/pt-dark.jpg")
    img.setAttribute(
      "alt",
      "Foto de Luiz sorrindo usando camisa jeans, barba e fundo branco"
    )
  }
}
