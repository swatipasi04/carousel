var imgs = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjp7J-RC-k71Yay9X4m4miBkxxMtcIJ_LWw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58djB96inGKMRix6mMLx2C5alrNNv5vY3ig&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolHdemlgPH1bEVTde0OlbRdXE8ZLZ8Hi2Ew&usqp=CAU'
           ];

var container = document.getElementById('div-img');
//console.log("container", container.childNodes);

for (var i = 0, j = imgs.length; i < j; i++) {
    var img = document.createElement('img');
    img.src = imgs[i];
    container.appendChild(img);
}


function myFunctionNext() {
  var container = document.getElementById('div-img');
  var next=container.firstElementChild;
  //console.log(next);
  container.appendChild(next);
}


function myFunctionPrev() {
  var container = document.getElementById('div-img');
  var prev=container.lastElementChild;
  //console.log(prev);
  container.prepend(prev);

}
