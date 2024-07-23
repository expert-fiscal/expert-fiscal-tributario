const rArrows = document.querySelectorAll(".right-arrow");
const lArrows = document.querySelectorAll(".left-arrow");
const movieLists = document.querySelectorAll(".movie-list");

rArrows.forEach((arrow,i)=>{
    const itemNum = movieLists[i].querySelectorAll("img").length+1;
    arrow.addEventListener("click", ()=>{
        let start = movieLists[i].computedStyleMap().get("transform")[0].x.value;
        if(window.innerWidth-start < 290*itemNum){
            movieLists[i].style.transform = `translateX(${start-290}px)`;
            lArrows[i].style.visibility = "visible";
        }else{
            movieLists[i].style.transform = "translate(0)";
            lArrows[i].style.visibility = "hidden";
        }   
    });
});

lArrows.forEach((arrow,i)=>{
    const itemNum = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", ()=>{
        let start = movieLists[i].computedStyleMap().get("transform")[0].x.value;
        if(start < -290){
            movieLists[i].style.transform = `translateX(${start+290}px)`;
        }else{
            movieLists[i].style.transform = "translate(0)";
            lArrows[i].style.visibility = "hidden";
        }   
    });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .sidebar, .navbar, .movie-list-title, .sidebar-item, .toggle"
);

ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});