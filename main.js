
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("ow!  don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var numP = document.querySelector("#compoundInvestment")
  var num = parseInt(numP.textContent)
  numP.textContent = num * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector("#circle-bw") 

  if (circle.style.background === "black") {
  	circle.style.background = "white"
  }
  else {
  	circle.style.background = "black"
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
})

var inactiveShowing = true
document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var userListEl = document.querySelector('#userList')
  var listItems = userListEl.querySelectorAll('li.inactive')
  for (var i = 0; i < listItems.length; i ++) {
    // userListEl.removeChild(listItems[i])  
    if (inactiveShowing) {
        listItems[i].style.display = 'none'
      }
    else {
      listItems[i].style.display = 'list-item'
    }
  }
  if (inactiveShowing) inactiveShowing = false
  else inactiveShowing = true
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

//   var reverseString = function(inputString){
//     var out
//   }
//   listItems = userListEl.querySelectorAll('li.inactive')
//   for loop
//     listItems[i].textContent = listItems[i].textContent.reverse()
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  // var cityImgEl = document.querySelector('#city-img')
  // var url = cityImgEl.src
  // var url.split = ('/')
})

