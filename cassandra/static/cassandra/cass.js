document.addEventListener('DOMContentLoaded', function() {

const artImages=document.querySelectorAll('.art_img_btn');
artImages.forEach(showArt);    

document.querySelector('#art').addEventListener('click', function(){
    document.querySelector('#art_view').style.display='block';
    document.querySelector('#who_view').style.display='none';
    document.querySelector('#sing_art_view').style.display='none';

})
document.querySelector('#who').addEventListener('click', function(){
    document.querySelector('#art_view').style.display='none';
    document.querySelector('#who_view').style.display='block';
    document.querySelector('#sing_art_view').style.display='none';

})


})
function showArt(artImages){
    artImages.addEventListener('click', function(){
        const artID= artImages.dataset.message;
        document.querySelector('#sing_art_view').style.display='block';
        document.querySelector('#art_view').style.display='none';
        document.querySelector('#who_view').style.display='none';



        fetch(`/art/${artID}`)
          .then(response => response.json())
          .then(artPiece =>{
              const piece=`<div><img width='500' class="individual_art" src="${artPiece.art_image}"></img><p class="description">${artPiece.description}</p></div>`;
              document.querySelector('#sing_art_view').innerHTML=piece;

})
})
}