var notes =[
{id:'0',title:"表单控件赋值与取值",user:'xupeng',num:'10',time:'2018-03-14',tags:"2",lead:"主要针对jQuery radio取值，checkbox取值，select取值，radio选中，checkbox选中，select选中，及其相关内容描述",
content:
'#！获 取一组radio被选中项的值！# *'+
'var item = $("input[name=items][checked]").val(); **'+
'#！获 取select被选中项的文本！# *'+
'var item = $("select[name=items] option[selected]").text();**'+
'#！select下拉框的第二个元素为当前选中值！# *'+
'$("#select_id")[0].selectedIndex = 1; **'+
'#！radio单选组的第二个元素为当前选中值！# *'+
'$("input[name=items]").get(1).checked = true; **'+
'#！获取值： ！#*'+
'文本框，文本区域：$("#txt").attr("value")；* '+
'多选框 checkbox：$("#checkbox_id").attr("value")； * '+
'单选组radio：   $("input[type=radio][checked]").val();* '+ 
'下拉框select： $("#sel").val(); * * '+
'#！控制表单元素：！# * '+
'文本框，文本区域：$("#txt").attr("value","");//清空内容 * '+
'$("#txt").attr("value","11");//填充内容 * '+
'多选框checkbox： $("#chk1").attr("checked","");//不打勾* '+
'$("#chk2").attr("checked",true);//打勾 * '+
'if($("#chk1").attr("checked")==undefined) //判断是否已经打勾 * '+
'单选组 radio：    $("input[type=radio]").attr("checked","2");//设置value=2的项目为当前选中项*  '+
'下拉框 select：   $("#sel").attr("value","-sel3");//设置value=-sel3的项目为当前选中项 * '+
'$("&lt;option value=&quot;1&quot;&gt;1111&lt;/option&gt;&lt;option value=&quot;2&quot;&gt;2222&lt;/option&gt;").appendTo("#sel")//添加下拉框的option * '+
'$("#sel").empty()；//清空下拉框'},
{id:'1',title:"jQuery设置时间默认最近7天",user:'xupeng',num:'10',time:'2018-04-12',tags:"2",lead:"",
content:
'#!jQuery设置时间默认最近7天!#**'+
'var start = new Date(); * '+
'start.setDate(start.getDate()-7);//设置为7天前的日期* '+
'$("#startTime").val(format(start));** '+
'var end = new Date();* '+
'$("#endTime").val(format(end));*** '+
'//时间转字符串 yyyy-MM-dd* '+
'function format(date){* '+
'	//获取当前的日期 * '+
'	var y = check(date.getFullYear()); * '+
'    var m = check(date.getMonth()+1);* '+
'    var d = check(date.getDate()); * '+
'	return y+"-"+m+"-"+d;* '+
'}* '+
'//检查是不是两位数字，不足补全** '+
'function check(str){* '+
'  str=str.toString();* '+
'  if(str.length<2){* '+
'      str="0"+ str;* '+
'  }* '+
'  return str;*  '+
'}'},
{id:'2',title:'Map的几种遍历方式',user:'xupeng',num:'10',time:'2018-04-26',tags:'1',lead:"",content:'#！keySet！# *// keySet get(key) 获取key and value*  public void testKeySetAndGetKey() {*    for (Integer key : map.keySet()) {*      System.out.println(key + ":" + map.get(key));*    }*  }**#！entrySet！#*// entrySet 获取key and value*  public void testEntry() {*    for (Map.Entry<Integer, Integer> entry : map.entrySet()) {*      System.out.println(entry.getKey() + ":" + entry.getValue());*    }*  }**#！Iterator！#*  // Iterator entrySet 获取key and value*  public void testIterator() {*    Iterator<Map.Entry<Integer, Integer>> it = map.entrySet().iterator();*    while (it.hasNext()) {*      Map.Entry<Integer, Integer> entry = it.next();*      System.out.println(entry.getKey() + ":" + entry.getValue());*      // it.remove(); 删除元素*    }*  }'},
{id:'3',title:'JTopo画图',user:'xupeng',num:'10',time:'2018-04-27',tags:'8',
lead:"  JTopo是一款强大的拓扑图形化界面开发工具，优点很多，缺点也有，最重要的这是国产插件，对爱国青年来说这是国家的骄傲，标志着我国打破了美帝列强的技术封锁，研发出了属于自己的拓扑插件。对于广大学渣程序猿来说则意味更容易的理解API",
content:'#!Hello World!#*			*			// &lt;script type=&quot;text/javascript&quot; src=&quot;js/jtopo-min.js&quot;&gt; //引入jtopo*            *			var canvas = document.getElementById("canvas"); *			var stage = new JTopo.Stage(canvas); // 创建一个舞台对象*			var scene = new JTopo.Scene(stage); // 创建一个场景对象*			*			var node = new JTopo.Node("Hello");	// 创建一个节点*			node.setLocation(300,200);	// 设置节点坐标					*			scene.add(node); // 放入到场景中**#!节点设置!#*			*			var node = new JTopo.Node("Hello");	// 创建一个节点*			node.setLocation(300,200);	// 设置节点坐标					*			node.rotate = Math.random(); // 旋转角度*			node.scaleX = Math.random(); // 水平方向的缩放*			node.scaleY = Math.random(); // 垂直方向的缩放*			node.alpha = Math.random();  // 透明度*			node.setImage("host.png"); // 设置图片*						**#!连线!#*						*			var stage = new JTopo.Stage(canvas);*			var scene = new JTopo.Scene(stage);*			*			var nodeFrom = new JTopo.Node("from");*			nodeFrom.setLocation(200,200);*			scene.add(nodeFrom);*			*			var nodeTo = new JTopo.Node("To");*			nodeTo.setLocation(300,200);*			scene.add(nodeTo);*			*			var link = new JTopo.Link(nodeFrom, nodeTo); // 增加连线*			scene.add(link);*'},
{id:'4',title:'Linux 常用基本命令',user:'xupeng',num:'10',time:'2018-05-03',tags:'9',
lead:"Linux中许多常用命令是必须掌握的，这里将我学linux入门时学的一些常用的基本命令分享给大家一下，希望可以帮助你们。",
content:'*#!1)ll 和ls命令!#*命令格式：ll*命令功能：列出目标目录中所有的子目录和文件*命令格式：ls*命令功能：显示目标目录中所有的子目录和文件的文件名称*#!2)cd 命令!#*命令格式：cd  [目录名]*命令功能：切换当前目录至dirName*常用范例：cd /（进入系统根目录)、cd .. （进入当前目录的上级目录）*#!3)pwd 命令!#*命令格式：pwd*命令功能：查看”当前工作目录“的完整路径**#!4)ps –ef|grep 命令!#*命令格式：ps –ef|grep java*命令功能：显示所有与java相关的进程*#!5)Kill 命令!#*命令格式：kill -9 进程号*命令功能：杀死进程*#!6)zip/unzip 命令!#*命令格式：unzip abc.zip 解压 | zip –r abc.zip abc 压缩  *命令功能：解压|压缩文件*#!7)cat 命令!#*命令格式：cat [选项] 文件名称*命令功能：一次显示整个文件内容*常用范例：cat –n run.log |grep ‘关键字’，在run.log文件中查找出现关键字的地方*#!8)more 命令!#*命令格式：more [选项 文件名称*命令功能：功能类是cat，以一页一页的显示内容，方便查看*常用范例：more +3 run.log，表示从第三行开始浏览文件*#!9)tail 命令!#*命令格式：tail [选项] 文件名称*命令功能：显示指定文件末尾内容*常用范例：tail -100f run.log，表示查看run.log文件最后100行，并且循环读取内容*#!10)mkdir命令!#*命令格式：mkdir [选项] 目录名*命令功能：创建指定的名称的目录*常用范例：mkdir abc，创建名称为abc的目录*范    例：mkdir abc def 创建名分别为abc def 的两个目录*                 mkdir -p /tmp/dir1/dir2 创建一个目录树*#!11)rm 命令!#*命令格式：rm [选项] 文件或者目录*命令功能：删除文件或者目录*常用范例：rm –rf log，删除log目录以及目录下的全部文件或目录*#!12)mv 命令!#*命令格式：mv abc.txt def.txt*命令功能：mv 源文件名 重命名后名称*常用范例：mv abc.txt def.txt，把abc.txt重命令为def.txt，目录同理*#!13)cp 命令!#*命令格式：cp [选项] abc.txt ../*命令功能：复制文件*常用范例：cp –r abc.txt ../，复制abc.txt文件到上层目录中*  cp -R abc dir 复制abc文件下所有文件包括本身到abc文件中*#!14)find 命令!#*命令格式：find [选项] 文件名称*命令功能：查找文件*常用范例：find –name“%关键字%”，在当前目录通过关键字模糊查找*#!15)df 命令!#*命令格式：df [选项]*命令功能：显示指定磁盘文件的可用空间*常用范例：df –h，显示系统磁盘文件的使用情况*#!16)top 命令!#*命令格式：top *命令功能：显示当前系统正在执行的进程的相关信息，包括进程ID、内存占用率、CPU占用率等*#!17)free 命令!#*命令格式：free [选项]*命令功能：free 命令显示系统使用和空闲的内存情况，包括物理内存、交互区内存(swap)和内核缓冲区内存*常用范例：free –m，显示系统空闲内存统计*18)rz 命令*命令格式：rz [选项]*命令功能：上传文件到linux当前目录*常用范例：rz –y，上传文件到当前目录，并且覆盖同名文件*#!19)vi 命令!#*命令格式：vi 文件名称*命令功能：修改文件内容 *操作步骤：1、vi conf.properties 开始编辑*  2、光标移动到需要修改的位置，按下 i 键，进入插入模式直接输入*  3、按键：Esc *  4、安全：Shift + :*  5、输入：wq(保存并且退出)，按下回车*#!20)echo $JAVA_HOME命令!#*命令格式：echo $JAVA_HOME*命令功能：定位JDK的安装路径的前提是配置了环境变量$JAVA_HOME*#!21)java -version命令!#*命令格式：java -version*命令功能：查看jdk版本*'},
{id:'5',title:'数据库常用操作语句',user:'xupeng',num:'10',time:'2018-05-14',tags:'10',
lead:"SQL是目前使用最为广泛的数据库语言之一。这里，我总结了在数据库上，用SQL语言对数据排序、过滤和分组，以及表、视图、联结、子查询、游标、存储过程和触发器等内容。",
content:'#！1、创建数据库！#*CREATE DATABASE database-name**#！2、删除数据库！#*drop database dbname**#！3、备份sql server！#*--- 创建 备份数据的 device*USE master*EXEC sp_addumpdevice "disk", "testBack", "c:\mssql7backup\MyNwind_1.dat"*--- 开始 备份*BACKUP DATABASE pubs TO testBack**#！4、创建新表！#*create table tabname(col1 type1 [not null] [primary key],col2 type2 [not null],..)**根据已有的表创建新表：*A：create table tab_new like tab_old (使用旧表创建新表)*B：create table tab_new as select col1,col2… from tab_old definition only**#！5、删除新表！#*drop table tabname**#！6、增加一个列！#*Alter table tabname add column col type*注：列增加后将不能删除。DB2中列加上后数据类型也不能改变，唯一能改变的是增加varchar类型的长度。**#！7、添加主键： Alter table tabname add primary key(col)！#*删除主键： Alter table tabname drop primary key(col)**#！8、创建索引：create [unique] index idxname on tabname(col….)！#*删除索引：drop index idxname*注：索引是不可更改的，想更改必须删除重新建。**#！9、创建视图：create view viewname as select statement！#*删除视图：drop view viewname**#！10、几个简单的基本的sql语句！#*选择：select * from table1 where 范围*插入：insert into table1(field1,field2) values(value1,value2)*删除：delete from table1 where 范围*更新：update table1 set field1=value1 where 范围*查找：select * from table1 where field1 like ’%value1%’ ---like的语法很精妙，查资料!*排序：select * from table1 order by field1,field2 [desc]*总数：select count as totalcount from table1*求和：select sum(field1) as sumvalue from table1*平均：select avg(field1) as avgvalue from table1*最大：select max(field1) as maxvalue from table1*最小：select min(field1) as minvalue from table1'},
{id:'6',title:'乱码问题处理',user:'xupeng',num:'10',time:'2018-05-15',tags:'1',
lead:"为什么说乱码是程序员无法避免的话题呢？这个首先要从编码机制上说起，大家都是中文和英文的编码格式不是一样，解码也是不一样的！工作遇到各种各样的乱码的解决方法总结一下。",
content:'#！一、URL转码：！#**encodeURIComponent(encodeURIComponent("中文"))**#！二、服务器端转码！#**<%@ page import ="java.net.URLDecoder"%>*URLDecoder.decode(request.getParameter( "domainName" ).replaceAll("％", "%" ), "UTF-8");**#！三、关于配置Tomcat的URIEncoding！#**问题：程序需要发送http GET请求到服务器，请求的参数中包含了中文字符。程序中参数为UTF-8格式，且经过了UTF-8 URL编码再发送。使用的tomcat服务器，但服务器端后台程序中取到的参数的中文是乱码。**解决方法：修改Tomcat的Server.xml，在Connector标签中加上URLEncoding参数。**内容：*&lt;Connector port="8080" maxThreads="150" minSpareThreads="25" maxSpareThreads="75" enableLookups="false" redirectPort="8443"*acceptCount="100" debug="99" connectionTimeout="20000" disableUploadTimeout="true" URIEncoding="UTF-8"/>**#！四、http请求乱码问题。！#**post请求出现乱码：**解决方法：在servlet页面添加*response.setCharcacterEncoding("utf-8")**get请求出现乱码：**解决方法：在后台获取字符串后对编码进行转化，如常见的编码ISO-8859-1，代码如下*String name = request.getParameter("name");*name=new String(name.getBytes("ISO-8859-1","utf-8"))　　*　　　　　　　　*　　　　#！五、Html中文乱码。！#**问题：htmll出现乱码的主要原因是html源代码内中文字内容与html编码不同造成。网页的编码是gbk,而中文的是utf-8;**解决方法：在页面顶部&lt;head&gt;......&lt;/head&gt中加上以下代码*&lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" />**　　　#！六、jsp页面出现乱码。！#**问题：开发人员开发jsp应该拥有良好的编码意识，jsp顶部应该首先明确编码是什么？**解决方法：在页面顶部加上以下语句*<%@ page language="java" import="java.util." pageEncoding="utf-8"%>'}

];
	