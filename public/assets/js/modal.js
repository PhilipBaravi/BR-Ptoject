// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// let sizesArr = document.querySelectorAll('.sizes div');
// let clicks = 0;

//   for(let i = 0; i < sizesArr.length; i++){
//     sizesArr[i].addEventListener('click', function(){
//       clicks += 1;
//       console.log(clicks);
//       sizesArr[i].classList.add('size-active');
//       if(clicks >=2){
        
//         clicks = 0;
//       }
//     })
//   }

