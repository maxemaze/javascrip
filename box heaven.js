	var count = 0;
	var r, g, b;
	var canvas, ctx;
	var timing;
	
	var wid = window.innerWidth;
	
	function setup() {
		canvas = document.createElement('canvas');
		canvas.height = window.innerHeight; canvas.width = wid;
		document.body.appendChild(canvas);
		ctx = canvas.getContext('2d');
		
		timing = setInterval(drawMyRect, 40);
	}
	
	function drawMyRect() { 
		r = Math.floor(Math.random()*256);
		g = Math.floor(Math.random()*256);
		b = Math.floor(Math.random()*256);
		
		ctx.fillStyle = "rgb("+r+","+g+","+b+")";
		ctx.fillRect((count)*200, 100, Math.floor(Math.random()*50)+100, 100);
		
		count++;
		count %= (wid/200);
	}
		
	
	setup();