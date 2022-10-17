const info = document.querySelectorAll(".infos");

info.forEach(info => {
  info.addEventListener("click", function() {
    console.log("clicou na aba", info);
  })
})

// console.log(abas);
// abas = info 