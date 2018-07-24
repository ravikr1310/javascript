(function () {

	function firstProgramTemplate() {
		var ref = this;
		this.str_obj = '';
		this.optionLength = '';
		this.elem_obj;
	}


	// $.ajax({
	// 	type: "GET",
	// 	url: "data/data.xml",
	// 	dataType: "xml",
	// 	success: function(xml) {					
	// 		var str_onload = '';
	// 		var array_obj = [];
	// 		var counter = 1;

	// 		optionLength = $(xml).find("container").find('option').length;				
		function onPageLoad(){
			debugger;
		xmlLoad();	
			str_onload = $(xml).find('container').find('option').eq(0).text();
			$('#container').html(str_onload);
			
			for(var i = 0; i < optionLength; i++){
				str_obj = '';
				str_obj+= $(xml).find('container').find('option').eq(i).text();
				array_obj.push(str_obj); 
			}

			elem_obj = document.getElementById("container");
			var interval_obj = setInterval(change, 5000);

			function change() {
			  elem_obj.innerHTML = array_obj[counter];
			  counter++;
			  if (counter >= array_obj.length) {
			    //counter = 1;
			    clearInterval(interval_obj);
			  }
			}				
							
		}
	
	//});
	
	firstProgramTemplate.prototype.xmlLoad = function(){
		debugger;
		$.ajax({
		type: "GET",
		url: "data/data.xml",
		dataType: "xml",
		success: function(xml) {					
			var str_onload = '';
			var array_obj = [];
			var counter = 1;

			optionLength = $(xml).find("container").find('option').length;				
			
			str_onload = $(xml).find('container').find('option').eq(0).text();
			}
		});
	}
	
	onPageLoad();
	return firstProgramTemplate;

})();
