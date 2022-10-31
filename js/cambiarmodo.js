window.onload = function () {
  let boton = document.querySelector(".modo");
  if (localStorage.checar == undefined || localStorage.checar == "claro") {
    boton.checked = false;
    localStorage.checar = "claro";
  } else {
    boton.checked = true;
    localStorage.checar = "obscuro";
  }
  document.body.className = localStorage.checar;

  boton.addEventListener("click", function () {
    if (this.checked) {
      localStorage.checar = "obscuro";
    } else {
      localStorage.checar = "claro";
    }
    document.body.style.transition = "all 0.2s";
    document.body.className = localStorage.checar;
    setTimeout(() => {
      document.body.style.transition = "unset";
    }, 200);
  });
};
