
var todo=[];
var add =document.querySelector('#add');
var noteList=document.querySelector('#noteList');

// const display =document.querySelector('#display');
// while(input !== "quit"&& input!=="q")
// let i=0;
add.addEventListener('click',function(){ 

    // while(i<todo.length)
      var newNote=document.querySelector('#newNote').value; //
      if(newNote!=""){
      document.querySelector('#newNote').value="";
      
      var li=document.createElement('li');
      li.append(newNote);
      noteList.appendChild(li);
      }
      else{
        alert("Cant add Empty Note");
      }
      
         
});
noteList.addEventListener('click',function(e)
{
  e.target.style.textDecoration="line-through";
})
noteList.addEventListener('dblclick',function(e)
{
  e.target.remove();
})
var but=document.querySelector('#Lout');
but.addEventListener('click',function(){
location.href="/login";
})

// del.addEventListener('click',function(){
//   noteList.removeChild(noteList.lastChild);

// });
// noteList.addEventListener('click',function(e)  // event object
// {
//   e.target.remove();
// })

// add.addEventListener('click',function(){
// console.log("im in");
//      const newNote=document.querySelector('#newNote').value;
//     todo.push(newNote);
//     //  console.log(`${todo}`);
// });

  //if (input==="delete")
//   delete.addEventListener('click',function(){

  
//     const indexstr = prompt("enter inde to delete");
//     const index=parseInt(console.log("enter index to delete"));
//     if(!Number.isNaN(index))
//     {
//     const deleted=todo.splice(index,1);
//     console.log(`deleted ${deleted[0]}`); 
//     }
//     else
//     console.log("unknown index");
//   })