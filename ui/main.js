var nameInput = document.getElementById("name1");
var textName = nameInput.value;
            var submit= document.getElementById("submitbtn");
            submit.onclick = function(){
             var names = ['name1','name2','name3'];
             var list='';
             for(var i=0;i<names.length;i++){
                 console.log(names[i]);
                 list += '<li>'+names[i]+'</li>';
                 
             }
             var ul=document.getElementById("testId");
             ul.innerHTML=list;
            }