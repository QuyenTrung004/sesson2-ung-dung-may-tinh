
function tong() {
    var a= document.getElementById("number1").value;
    var b= document.getElementById("number2").value;
    c =parseInt(a) + parseInt(b);
    document.getElementById("ket qua").innerHTML = a +"+"+b+"=" +c;
}
function hieu(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    c =parseInt(a) - parseInt(b);
    document.getElementById("ket qua").innerHTML= a +"-"+b+"="+c;
}
function nhan(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    c=parseInt(a) *parseInt(b);
    document.getElementById("ket qua").innerHTML= a+"*"+b+"="+c;
}
function chia(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    c=parseInt(a) /parseInt(b);
    document.getElementById("ket qua").innerHTML= a+"/"+b+"="+c
}

