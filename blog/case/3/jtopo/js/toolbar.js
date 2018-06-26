
	
// ?????
function showJTopoToobar(stage){
	var toobarDiv = $('<div class="jtopo_toolbar">').html(''
		+'<input type="radio" name="modeRadio" value="normal" checked id="r1"/>'
		+'<label for="r1"> ??</label>'
		+'&nbsp;<input type="radio" name="modeRadio" value="select" id="r2"/><label for="r2"> ??</label>'
		+'&nbsp;<input type="radio" name="modeRadio" value="edit" id="r4"/><label for="r4"> ??</label>'
		+'&nbsp;&nbsp;<input type="button" id="centerButton" value="????"/>'
		+'<input type="button" id="fullScreenButton" value="????"/>'
		+'<input type="button" id="zoomOutButton" value=" ? ? " />'
		+'<input type="button" id="zoomInButton" value=" ? ? " />'
		+'&nbsp;&nbsp;<input type="checkbox" id="zoomCheckbox"/><label for="zoomCheckbox">????</label>'
		+'&nbsp;&nbsp;<input type="text" id="findText" style="width: 100px;" value="" onkeydown="enterPressHandler(event)">'
		+ '<input type="button" id="findButton" value=" ? ? ">' 
		+ '&nbsp;&nbsp;<input type="button" id="cloneButton" value="????">'
		+'&nbsp;&nbsp;<input type="button" id="exportButton" value="??PNG">'
		+ '&nbsp;&nbsp;<input type="button" id="printButton" value="??PDF">');	
		
	$('#content').prepend(toobarDiv);

	// ???????
	$("input[name='modeRadio']").click(function(){			
		stage.mode = $("input[name='modeRadio']:checked").val();
	});
	$('#centerButton').click(function(){
		stage.centerAndZoom(); //???????
	});
	$('#zoomOutButton').click(function(){
		stage.zoomOut();
	});
	$('#zoomInButton').click(function(){
		stage.zoomIn();
	});
	$('#cloneButton').click(function(){
		stage.saveImageInfo();
	});
	$('#exportButton').click(function() {
	    stage.saveImageInfo();
	});
	$('#printButton').click(function() {
	    stage.saveImageInfo();
	});
	$('#zoomCheckbox').click(function(){
		if($('#zoomCheckbox').is(':checked')){
			stage.wheelZoom = 1.2; // ????????
		}else{
			stage.wheelZoom = null; // ????????
		}
	});
	$('#fullScreenButton').click(function(){
		runPrefixMethod(stage.canvas, "RequestFullScreen")
	});

	window.enterPressHandler = function (event){
		if(event.keyCode == 13 || event.which == 13){
			$('#findButton').click();
		}
	};
	
	// ??
	$('#findButton').click(function(){
		var text = $('#findText').val().trim();
		//var nodes = stage.find('node[text="'+text+'"]');
		var scene = stage.childs[0];
		var nodes = scene.childs.filter(function(e){ 
			return e instanceof JTopo.Node; 
		});
		nodes = nodes.filter(function(e){
			if(e.text == null) return false;
			return e.text.indexOf(text) != -1;
		});
		
		if(nodes.length > 0){
			var node = nodes[0];
			node.selected = true;
			var location = node.getCenterLocation();
			// ??????????
			stage.setCenter(location.x, location.y);
			
			function nodeFlash(node, n){
				if(n == 0) {
					node.selected = false;
					return;
				};
				node.selected = !node.selected;
				setTimeout(function(){
					nodeFlash(node, n-1);
				}, 300);
			}
			
			// ????
			nodeFlash(node, 6);
		}
	});
}

var runPrefixMethod = function(element, method) {
	var usablePrefixMethod;
	["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
		if (usablePrefixMethod) return;
		if (prefix === "") {
			// ???,???????
			method = method.slice(0,1).toLowerCase() + method.slice(1);
		}
		var typePrefixMethod = typeof element[prefix + method];
		if (typePrefixMethod + "" !== "undefined") {
			if (typePrefixMethod === "function") {
				usablePrefixMethod = element[prefix + method]();
			} else {
				usablePrefixMethod = element[prefix + method];
			}
		}
	}
);

return usablePrefixMethod;
};
/*
runPrefixMethod(this, "RequestFullScreen");
if (typeof window.screenX === "number") {
var eleFull = canvas;
eleFull.addEventListener("click", function() {
	if (runPrefixMethod(document, "FullScreen") || runPrefixMethod(document, "IsFullScreen")) {
		runPrefixMethod(document, "CancelFullScreen");
		this.title = this.title.replace("??", "");
	} else if (runPrefixMethod(this, "RequestFullScreen")) {
		this.title = this.title.replace("??", "????");
	}
});
} else {
alert("??????");
}*/