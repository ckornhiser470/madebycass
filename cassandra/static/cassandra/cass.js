document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector('#hi');
  document.querySelector('#ul').style.display = 'none';

  if (navbarToggler)
        navbarToggler.addEventListener('click', function () {
        document.querySelector('#ul').style.display = 'block'
        });
  

    });

//   // // //   const navLinks = document.querySelectorAll(".nav-link");
//   // // //   for (var i = 0; i < navLinks.length) {
//   // // //     var k = i + 1;
//   // // //     var link = navLinks[i];
//   // // //     console.log(link);
//   // // //   }
//   // // // });

//   // // //   document.querySelector("#nerd_view").style.display = "none";
//   // // //   document.querySelector("#sing_art_view").style.display = "none";
//   // // //   document.querySelector("#journal_view").style.display = "none";

//   const artImages = document.querySelectorAll(".art_img_btn");
//   artImages.forEach(showArt);

//   // // //   document.querySelector("#art").addEventListener("click", function () {
//   // // //     document.querySelector("#art_view").style.display = "block";
//   // // //     document.querySelector("#who_view").style.display = "none";
//   // // //     document.querySelector("#sing_art_view").style.display = "none";
//   // // //     document.querySelector("#nerd_view").style.display = "none";
//   // // //     document.querySelector("#journal_view").style.display = "none";
//   // // //   });
//   // // //   document.querySelector("#journal").addEventListener("click", function () {
//   // // //     document.querySelector("#journal_view").style.display = "block";
//   // // //     document.querySelector("#art_view").style.display = "none";
//   // // //     document.querySelector("#who_view").style.display = "none";
//   // // //     document.querySelector("#sing_art_view").style.display = "none";
//   // // //     document.querySelector("#nerd_view").style.display = "none";
//   // // //   });
//   // // //   document.querySelector("#who").addEventListener("click", function () {
//   // // //     document.querySelector("#art_view").style.display = "none";
//   // // //     document.querySelector("#who_view").style.display = "block";
//   // // //     document.querySelector("#sing_art_view").style.display = "none";
//   // // //     document.querySelector("#journal_view").style.display = "none";
//   // // //     document.querySelector("#nerd_view").style.display = "none";
//   // // //   });
//   // // //   document.querySelector("#nerd").addEventListener("click", function () {
//   // // //     document.querySelector("#nerd_view").style.display = "block";
//   // // //     document.querySelector("#art_view").style.display = "none";
//   // // //     document.querySelector("#who_view").style.display = "none";
//   // // //     document.querySelector("#journal_view").style.display = "none";
//   // // //     document.querySelector("#sing_art_view").style.display = "none";
//   // // //   });
//   // // // });

//   function showArt(artImages) {
//     artImages.addEventListener("click", function () {
//       //   const artID = artImages.dataset.message;
//       //   fetch(`/art/${artID}`)
//       //     .then((response) => response.json())
//       //     .then((artPiece) => {
//       //       const piece = `<h1 class='indv_label'>${artPiece.label}</h1><p class="description">${artPiece.description}</p><img width='500' class="individual_art" src="${artPiece.art_image}"></img>`;
//       //       document.querySelector("#testing").innerHTML = piece;
//       //     });
//       // });
//       console.log("hi");
//     });
//   }
// });
