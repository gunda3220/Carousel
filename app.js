const nextButton = document.querySelector(".c-carousel-control-next");
const prevButton = document.querySelector(".c-carousel-control-prev");
const carouselItems = document.querySelectorAll(".c-carousel-item");
const carouselImages = document.querySelectorAll(".c-carousel-item img");
const indicatorLi = document.querySelectorAll(".c-carousel-indicator-li");
const indicatorUl = document.querySelector(".c-carousel-indicators ul");
var itemCount = carouselItems.length;
var indicatorUlWidth = indicatorUl.offsetWidth;
var tempUrl = "0";
var imgCounter = 0;
var imgUrls = ["0"];
carouselImages.forEach((item, i) => {
  imgUrls[i] = item.src;
});
var indicatorWidth = indicatorUlWidth/(itemCount+1);
indicatorLi.forEach((item, i) => {
  item.style.width = indicatorWidth+"px";
  item.style.height = (indicatorWidth/1.777)+"px";
  tempUrl = imgUrls[i];
  item.style.backgroundImage = "url('" + tempUrl + "')";
  item.addEventListener('click',()=>{
    removeActiveStatus();
    addActiveStatus(i);
  })
});
nextButton.addEventListener('click',() =>{
  var itemIndex = 0;
  carouselItems.forEach((item, i) => {
    if(item.classList.contains("active"))
    {
      itemIndex = i;
    }
  });
  removeActiveStatus();
  itemIndex++;
  if(itemIndex >= itemCount)
  {
    itemIndex = 0;
  }
  addActiveStatus(itemIndex);
});

prevButton.addEventListener('click',()=> {
  carouselItems.forEach((item, i) => {
    if(item.classList.contains("active"))
    {
      itemIndex = i;
    }
  });
  removeActiveStatus();
  itemIndex--;
  if(itemIndex < 0){
    itemIndex = itemCount-1;
  }
  addActiveStatus(itemIndex);
});
function removeActiveStatus(){
  carouselItems.forEach((item, i) => {
    item.classList.remove("active");
    indicatorLi[i].classList.remove("active");
  });
}
function addActiveStatus(target){
  carouselItems[target].classList.add("active");
  indicatorLi[target].classList.add("active");
}
