(function(){
	
	//alert('The Kraken has been released! Estás en ' + location.href + ' - ' + document.title);

                var container = document.createElement("div");
				container.style.padding = "20px";
				container.style.margin = "0";
				container.style.border = "1px solid #cccccc";
				container.id = "buyooBox";
				container.style.position = "absolute";
				container.style.top = "20px";
				container.style.right = "20px";
				container.style.zIndex = 100000;
				container.style.width = "350px";
				container.style.height = "210px";
				container.style.backgroundColor = "white";
				container.style.boxShadow = "0 0 35px rgba(0,0,0,0.5)";
				container.style.borderRadius = "4px";
				container.style.overflow = "hidden";
				container.style.wordWrap = "break-word";

				var logo = document.createElement("img");
				logo.setAttribute("src", "http://www.buyoo.com/Support/images/logo.jpg");
				container.appendChild(logo);

				var text = document.createElement("p");
				text.innerHTML = "Where to buy " + location.href;
				container.appendChild(text);


				document.body.appendChild(container);

})();


/*
function addElement() {

  var ni = document.getElementById('myDiv');

  var numi = document.getElementById('theValue');

  var num = (document.getElementById('theValue').value -1)+ 2;

  numi.value = num;

  var newdiv = document.createElement('div');

  var divIdName = 'my'+num+'Div';

  newdiv.setAttribute('id',divIdName);

  newdiv.innerHTML = 'Element Number '+num+' has been added! <a href=\'#\' onclick=\'removeElement('+divIdName+')\'>Remove the div "'+divIdName+'"</a>';

  ni.appendChild(newdiv);

}

function removeElement(divNum) {

  var d = document.getElementById('myDiv');

  var olddiv = document.getElementById(divNum);

  d.removeChild(olddiv);

}
*/