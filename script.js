console.log("Fonctionnalité 1bis : ")
let footerbis = document.getElementsByTagName('footer')[0]
//console.log(footerbis)
let logClickFooterbis = function() {
  console.log("click")
}
footerbis.addEventListener("click", logClickFooterbis);//mousse event named click​
console.log("Fonctionnalité 1 : ")
let footer = document.getElementsByTagName('footer')[0]
//console.log(footer)
let clickOnFooterCount = 0
let logClickFooter = function() {
  clickOnFooterCount++
  console.log("click n° " + clickOnFooterCount)
}
footer.addEventListener("click", logClickFooter)
console.log("Fonctionnalité 2 : ")
let navbarHeader = document.querySelectorAll('#navbarHeader')[0]
//console.log(navbarHeader)
let navbarBtnCollapse = document.getElementsByClassName('navbar-toggler')[0]
//console.log(navbarBtnCollapse)
navbarBtnCollapse.addEventListener("click", function() {
  navbarHeader.classList.toggle("collapse")//https://alligator.io/js/classlist/ toggle
})
console.log("Fonctionnalité 3 : ")
//pointe sur la card en entier
let textCard = document.getElementsByClassName('card-body')[0]
//console.log(textCard)
//pointe sur l'élément edit
let editCardBtn1 = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]
//console.log(editCardBtn1)
//colorise en rouge
editCardBtn1.addEventListener("click", function() {
  textCard.style.color = 'red'
})
console.log("Fonctionnalité 4 : ")
let textSecondCard = document.getElementsByClassName('card-body')[1]
//console.log(editCardBtn2)
let editCardBtn2 = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1]
//console.log(textSecondCard)
editCardBtn2.addEventListener("click", colorToggle)
function colorToggle() {
  var textColor = document.querySelectorAll('div.card-body')[1].style.color;
  if (textColor == '') {
    textSecondCard.style.color = 'green';
  } else {
    textSecondCard.style.color = '';
  }
}
console.log("Fonctionnalité 5 : ")
let header = document.getElementsByTagName('header')[0]
//console.log(header);
function bootstrapToggle(e){
  e.preventDefault();  //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL
  let bootstrapStatus = document.getElementsByTagName('link')[0]
  console.log(bootstrapStatus.href);
  if (bootstrapStatus.href == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
    bootstrapStatus.setAttribute("href", "")
  } else {
    location.reload()
  }
  //console.log(bootstrapStatus.href);
}
header.addEventListener('dblclick', function(e){
  bootstrapToggle(e)
})
