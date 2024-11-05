let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null ;
btn.onclick =  ()=>{
  if(inp.value != ''){
    boxs[0].innerHTML += `
     <p class="item" draggable="true">${inp.value}</p>
    ` ;
    inp.value = '' ;
  }
  dragItem();
}
function dragItem() {
  let items = document.querySelectorAll('.item');
  items.forEach((item)=>{
    item.addEventListener('dragstart', function (){
      // console.log("drag start");
      drag = item ;
      item.style.opacity = '0.5' ;
    });
    item.addEventListener('dragend', function (){
      // console.log("drag end");
      drag =  null ;
      item.style.opacity = '1' ;
    });
    boxs.forEach((box)=>{
      box.addEventListener('dragover',function(e){
        e.preventDefault();
        // console.log("Dragover");
        this.style.backgroundColor = '#090';
        this.style.color = '#fff' ;
        

      });
      box.addEventListener('dragleave',function() {
        this.style.backgroundColor = '#fff';
        this.style.color = '#000' ;
        
      });

      box.addEventListener('drop',function(){
        this.append(drag);
        this.style.backgroundColor = '#fff';
        this.style.color = '#000' ;
      })
    });

  });
  
}
