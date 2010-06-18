
var log = false;

function trace(message){
    if(log) console.log(message);
};

$(function(){
	trace("start");
	render(20);
	$('textarea#edit').bind("keyup change click", function(e){
		render(20);
	    });
    });


function render(space){
    trace("render()");
    var lines = $('textarea#edit').val().split(/[\r\n]/);
    var data = new Array();
    for(var i = 0; i < lines.length; i++){
	var tmp= lines[i].split(/\s+/);
	var words = new Array();
	for(var j = 0; j < tmp.length; j++){
	    if(tmp[j].length > 0) words.push(tmp[j]);
	}
	data.push(words);
    }
    trace(data);

    $('div#display').html('<table id="ta"></table>');
    for(var i = 0; i < data.length; i++){
	$('#ta').append('<tr id="tr'+i+'"></tr>');
	for(var j = 0; j < data[i].length; j++){
	    $('#tr'+i).append('<td>'+ data[i][j] +'</td>');
	}
    }
};
