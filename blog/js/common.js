
/**导入页面共用部分 作者：xupeng*/
$(function(){
	footer();
	header();
	currentPage();
});

/**获得当前页面 激活导航*/
function currentPage(){
	var href = window.location.href;
	var arry = href.split("/");
	var page = arry[arry.length-1].split(".")[0];
	var len = $("ul.nav li").length;
	for(var i = 0;i<len;i++){
		var nav = $("ul.nav li:eq("+i+")").children().attr("href").split(".")[0];
		$("ul.nav li:eq("+i+")").children().removeClass("active");
		if(page.indexOf(nav) >= 0){
			$("ul.nav li:eq("+i+")").children().addClass("active");
		}
	}
}

/**顶部部页面加载*/
function header(){
	var htm = [];
	htm.push('<div class="header">');
	htm.push('<div class="container">');
	htm.push('<div class="header-nav">');
	htm.push('<nav class="navbar navbar-default">');
	htm.push('<div class="navbar-header">');
	htm.push('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">');
	htm.push('<span class="sr-only">Toggle navigation</span>');
	htm.push('<span class="icon-bar"></span>');
	htm.push('<span class="icon-bar"></span>');
	htm.push('<span class="icon-bar"></span>');
	htm.push('</button>');
	htm.push('<div class="logo">');
	htm.push('<a class="navbar-brand" href="index.html">别离的笙箫 <span>www.xupeng666.xyz</span></a>');
	htm.push('</div>');
	htm.push('</div>');
	htm.push('<div class="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">');
	htm.push('<ul class="nav navbar-nav cl-effect-14">');
	htm.push('<li><a href="index.html" class="">首页</a></li>');
	htm.push('<li><a href="essay.html">随笔</a></li>');
	htm.push('<li><a href="case.html">案例</a></li>');
	htm.push('<li><a href="notes.html">笔记</a></li>');
	htm.push('<li><a href="website.html">网站</a></li>');
	htm.push('<li><a href="contact.html">关于我</a></li>');
	htm.push('</ul>');
	htm.push('</div>');
	htm.push('</nav>');
	htm.push('</div>');
	htm.push('</div>');
	htm.push('</div>');
	$("#header").html(htm.join(" "));

}

/**底部页面加载*/
function footer(){
	var htm = [];
	htm.push('<div class="copy">');
	htm.push('<div class="container">');
	htm.push('<p>Copyright &copy; 2016.Company 别离的笙箫 All 湖南长沙 </p>');
	htm.push('<div class="social-icons">');
	htm.push('<ul>');
	htm.push('<li><a  class="fb"></a></li>');
	htm.push('<li><a ></a></li>');
	htm.push('<li><a  class="gg"></a></li>');
	htm.push('<li><a  class="pn"></a></li>');
	htm.push('</ul>');
	htm.push('</div>');
	htm.push('</div>');
	htm.push('</div>');
	$("#footer").html(htm.join(" "));

}

		
			
			
				
					
					
					
										
					
			
		
	