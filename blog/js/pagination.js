
/**分页组件 作者：xupeng*/

/**分页初始化*/
function initpage(data,pageNum){
	var result = null ;
	var htm = [];
	htm.push('<ul class="pagination pagination-lg">');
	htm.push('<li class="disabled"><a><i class="fa fa-angle-left">«</i></a></li>');
	htm.push('<li ><a>1</a></li>');
	htm.push('<li><a><i class="fa fa-angle-right">»</i></a></li>');
	htm.push('</ul>');
	$("#pagination").html(htm.join(""));
	
	var page = data.length/pageNum;
	if(page >= 1){
		result = data.slice(0,pageNum);
	}else{
		$("#pagination ul li").eq(2).addClass("disabled");
		result = data;
		
	}
	last(data,pageNum);
	next(data,pageNum);
	return result;
}

/**上一页*/
function last(data,pageNum){

	$("#pagination ul li").eq(0).bind("click",function(){
		if($("#pagination ul li").eq(0).attr('class')!= 'disabled'){
			var curpag = $("#pagination ul li a").eq(1).html();
			$("#pagination ul li a").eq(1).html(curpag-1);
			isSWPage(curpag-1,Math.ceil(data.length/pageNum));
		}
		
	});

	
}

/**下一页*/
function next(data,pageNum){
	
	$("#pagination ul li").eq(2).bind("click",function(){
		if($("#pagination ul li").eq(2).attr('class')!= 'disabled'){
			var curpag = parseInt($("#pagination ul li a").eq(1).html());
			$("#pagination ul li a").eq(1).html(curpag+1);
			isSWPage(curpag+1,Math.ceil(data.length/pageNum));
		}
	});
	
}

/**判断当前页是否为首尾页*/
function isSWPage(curNum,countNum){
	if(curNum == 1){
		$("#pagination ul li").eq(0).addClass("disabled");
	}else{
		$("#pagination ul li").eq(0).removeClass("disabled");
	}
	if(curNum == countNum){
		$("#pagination ul li").eq(2).addClass("disabled");
	}else{
		$("#pagination ul li").eq(2).removeClass("disabled");
	}
	
}