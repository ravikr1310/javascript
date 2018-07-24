(function () {

	function firstProgramTemplate() {
		var ref = this;
		this.str_obj = '';
		this.optionLength = '';
		this.elem_obj;
	}


	$.ajax({
		type: "GET",
		url: "./data/data.json",
		dataType: "json",
		success: function(json) {
			var json_obj = $(json);//parse JSON
			var str_obj = '';
			var array_obj = [];
			var counter = 0;
			var elem_obj;
			debugger;
			var object_length = json_obj.length;
			
			//console.log(json_obj[i]);	
			for(var i in json_obj){
				debugger;
				counter++;
				str_obj = '';
				str_obj+= json_obj[i].Language
				array_obj.push(str_obj);
				if(counter <= object_length){
					//setTimeout(interval_obj);
				}
			}

			var interval_obj = setInterval(change, 5000);
			//counter = 0;
			elem_obj = document.getElementById("container");
			$(elem_obj).html(array_obj[0]);
			debugger;
			
			
			
			counter = 1;
			function change(){
				debugger;
				$(elem_obj).html(array_obj[counter]);

				counter++;

				if (counter >= object_length) {
				//counter = 1;
					clearInterval(interval_obj);
				}
			}

		}
	
	});
	
	
	return firstProgramTemplate;

})();
