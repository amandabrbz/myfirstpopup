window.onload = function() {
  function iniciaModal(modalID) {
    if (localStorage.closeModal !== modalID) {
      var modal = document.getElementById(modalID);
      if (modal) {
        modal.classList.add("mostrar");
        modal.addEventListener("click", e => {
          if (e.target.id == modalID || e.target.className == "fechar") {
            modal.classList.remove("mostrar");
            localStorage.closeModal = modalID;
          }
        });
      }
    }
  }

  var btn = document.querySelector(".tittle");
  btn.addEventListener("click", () => iniciaModal("modal-promocao"));
};
