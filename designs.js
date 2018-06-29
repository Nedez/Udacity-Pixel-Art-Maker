
	//Creating functionGrid
	function makeGrid(){

		var height = $('#input_height').val();
		var width = $('#input_width').val();

		//For loops to create grid from user input
		for(var i = 1; i < height; i++){
			$('table').append('<tr></tr>');

		}
			//Inner loop for adding width after each row using  variable x
			for(var x = 1; x < width; x++){
				$('table>tr').append('<td></td>');
			}

	}	
	$('#sizePicker').submit(function(event){
		event.preventDefault();
		$('#pixel_canvas').children().remove();
		makeGrid();
		event.preventDefault();
		});
		
		$('table').click(function(event){

			//variable to select the colorPicker
			var coloredTable = $('#colorPicker').val();
			
			$(event.target).css('background-color', coloredTable);
		});