window.onload = function() {
  var video = document.getElementById("videoJeff");
  function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
      modal.classList.add("mostrar");
      modal.addEventListener("click", e => {
        if (e.target.id == modalID || e.target.className == "fechar") {
          modal.classList.remove("mostrar");
          video.remove(); //kill iframe
        }
      });
    }
  }

  const logo = document.querySelector(".card-btn .btn");
  logo.addEventListener("click", () => iniciaModal("modal-promocao"));

  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 800) {
      iniciaModal("modal-promocao");
    }
  });
};
