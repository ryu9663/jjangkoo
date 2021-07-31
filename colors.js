const image=document.querySelector('#myImage');
const button=document.querySelector('#theButton');


button.textContent = '버튼을 누르면 사진이 바뀝니다.'

function changeImage(){
  
  if(image.src.match("image/a.jpg"))
  {
    image.src="image/b.jpg";
    button.value='짱구와 흰둥이의 기념사진';
    document.querySelector('body').style.backgroundColor='AliceBlue';
  }
  else{
    image.src="image/a.jpg";
    button.value='노을속 짱구와 흰둥이';
    document.querySelector('body').style.backgroundColor='LavenderBlush';
  }
}


button.addEventListener('click',changeImage)

