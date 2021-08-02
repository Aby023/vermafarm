window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop || document.documentElement.scrollTop) 
  {
    document.getElementById("secondNav").style.padding = "7px 10px";
    document.getElementById('secondNav').style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    document.getElementById("#verma").style.width = "100px";
    document.getElementById("#verma").style.height = "50px";
    document.getElementById("rightnav").style.marginTop= "20px";
    document.getElementById("myBtn").style.display = "block";
  } 
  else 
  {
    document.getElementById("secondNav").style.padding ="10px 10px";
    document.getElementById('secondNav').style.boxShadow = "none";
    document.getElementById("logo").style.width = "146px";
    document.getElementById("logo").style.height = "73px";
    document.getElementById("rightnav").style.marginTop= "50px";
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


