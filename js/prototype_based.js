(function () {

	function animationTemplate(){
		ref = this;
		this.top_obj = 0;
		this.counter = 0;
		this.ani_limit = 100;
		this.boolVal = true;

		this.elem_obj = document.getElementById('box');
		this.interval_obj_left = setInterval(leftAnimate, 10);
		this.interval_obj_top;
		this.interval_obj_right;
		this.interval_obj_bottom;
		//this.test;
	}
	

	animationTemplate.prototype.init = function() {
		var ref = this;
		setTimeout(function() {
            ref.loadXML();
    	}, 300);

    	animationTemplate.prototype.loadXML = function() {
            var ref = this;
            alert("test function");
    	}
	}
	

	
	
	
	function leftAnimate(){
		//test();
		debugger;
		ref.top_obj++;
		ref.elem_obj.style.left = top_obj+'px';
		if(ref.top_obj > ref.ani_limit){
			//top_obj=0;
			clearInterval(interval_obj_left);
			ref.interval_obj_top = setInterval(topAnimate, 10);
			ref.top_obj = 0;
		}
	}

	function topAnimate(){
		debugger;
		ref.top_obj++;
		ref.elem_obj.style.top = ref.top_obj+'px';
		if(ref.top_obj > ref.ani_limit){
			clearInterval(interval_obj_top);
			interval_obj_right =setInterval(rightAnimate, 10);
			//top_obj = 0;
		}
	}
	
	function rightAnimate(){
		debugger;
		ref.top_obj--;
		ref.elem_obj.style.left = ref.top_obj+'px';
		if(ref.top_obj < 1){
			clearInterval(interval_obj_right);
			ref.top_obj = ref.ani_limit;
			interval_obj_bottom = setInterval(bottomAnimate,10);

		}
	}

	function bottomAnimate(){
		debugger;
		ref.top_obj--;;
		ref.elem_obj.style.top = ref.top_obj+'px';
		if(ref.top_obj < 0){
			clearInterval(interval_obj_bottom);
		}
	}
	
	//animationTemplate();
	return animationTemplate();

})();
