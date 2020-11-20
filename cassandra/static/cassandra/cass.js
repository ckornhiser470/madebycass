document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#nerd_view").style.display = "none";
  document.querySelector("#sing_art_view").style.display = "none";
  document.querySelector("#journal_view").style.display = "none";

  const artImages = document.querySelectorAll(".art_img_btn");
  artImages.forEach(showArt);

  document.querySelector("#art").addEventListener("click", function () {
    document.querySelector("#art_view").style.display = "block";
    document.querySelector("#who_view").style.display = "none";
    document.querySelector("#sing_art_view").style.display = "none";
    document.querySelector("#nerd_view").style.display = "none";
    document.querySelector("#journal_view").style.display = "none";
  });
  document.querySelector("#journal").addEventListener("click", function () {
    document.querySelector("#journal_view").style.display = "block";
    document.querySelector("#art_view").style.display = "none";
    document.querySelector("#who_view").style.display = "none";
    document.querySelector("#sing_art_view").style.display = "none";
    document.querySelector("#nerd_view").style.display = "none";
  });
  document.querySelector("#who").addEventListener("click", function () {
    document.querySelector("#art_view").style.display = "none";
    document.querySelector("#who_view").style.display = "block";
    document.querySelector("#sing_art_view").style.display = "none";
    document.querySelector("#journal_view").style.display = "none";
    document.querySelector("#nerd_view").style.display = "none";
  });
  document.querySelector("#nerd").addEventListener("click", function () {
    document.querySelector("#nerd_view").style.display = "block";
    document.querySelector("#art_view").style.display = "none";
    document.querySelector("#who_view").style.display = "none";
    document.querySelector("#journal_view").style.display = "none";
    document.querySelector("#sing_art_view").style.display = "none";
  });
});

function showArt(artImages) {
  artImages.addEventListener("click", function () {
    const artID = artImages.dataset.message;
    document.querySelector("#sing_art_view").style.display = "block";
    document.querySelector("#art_view").style.display = "none";
    document.querySelector("#who_view").style.display = "none";

    fetch(`/art/${artID}`)
      .then((response) => response.json())
      .then((artPiece) => {
        const piece = `<h1 class='indv_label'>${artPiece.label}</h1><p class="description">${artPiece.description}</p><img width='500' class="individual_art" src="${artPiece.art_image}"></img>`;
        document.querySelector("#sing_art").innerHTML = piece;
      });
    document.querySelector("#back_btn").addEventListener("click", function () {
      document.querySelector("#sing_art_view").style.display = "none";
      document.querySelector("#art_view").style.display = "block";
    });
  });
}
