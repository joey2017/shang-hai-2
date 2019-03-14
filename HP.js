(function(){
	var div = document.createElement('div');
	div.className = 'mask flexcontainer';
	div.id = 'mask';
	div.style.display = 'none';
	div.innerHTML = '<div class="mask-box"><div class="mask-pic"><i></i></div><span></span></div>';
	document.body.appendChild(div);


    function checkDirect(){
        if(window.orientation==180||window.orientation==0){
            document.getElementById('mask').style.display = 'none';
        }
        if(window.orientation==90||window.orientation==-90){
            document.getElementById('mask').style.display = 'block';
        }
    } checkDirect();
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", checkDirect, false);

	document.addEventListener("touchmove",function(e){
      e.preventDefault();
      e.stopPropagation();
	},false);

}());