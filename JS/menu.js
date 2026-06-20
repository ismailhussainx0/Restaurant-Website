
// Menu Search Feature

let searchInput = document.querySelector("#searchInput");
console.log(searchInput)
let menuItem = document.querySelectorAll(".menu-item");

searchInput.addEventListener("input", function(){

    let searchValue = searchInput.value.toLowerCase();

    menuItem.forEach(function(item){

        let foodTitle = item.querySelector(".food-title").innerText.toLowerCase();

        if(foodTitle.includes(searchValue)){
            item.style.display = "";
        }else{
            item.style.display = "none";
        }

    });

});
