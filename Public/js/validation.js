
function Validate() {
    var uname=document.getElementById("uname").value;
    var psw=document.getElementById("psw").value;
    if(uname=="Alan" && psw=="asdf1234" || uname=="Shan" && psw=="asd12345")
    {
        
            location.href="/Todo";
            return false;
    }
    else
    {
        alert("You are not allowed");
        window.location.reload(); //to reload the page bro note this....
    }
}

