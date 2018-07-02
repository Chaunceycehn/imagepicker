b.onclick = function(){
    console.log('hi')
    b.querySelector('.circle')
    .classList.add('active')
  }
  b.querySelector('.circle').addEventListener('transitionend',function(){
    b.querySelector('.circle').classList.remove('active')
  })
  
  
  keyword.oninput = function(e){
    var value = keyword.value
    if(value){
      suggertion.classList.add('active')
    }else{
      suggertion.classList.remove('active')
    }
  }
  imageinput.onchange = function(e){
      let formDate = new FormDate()
      formDate.append('xxx',e.target.files[0])
      $.ajax({
        url:'xxxx',
        data:formDate,
        processData:false,
        contentType:false,
        type:'POST'
      })
  
  }