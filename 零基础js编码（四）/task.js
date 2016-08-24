/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityName = document.getElementById("aqi-city-input");
var aqiValue = document.getElementById("aqi-value-input");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = cityName.value.trim();
	var aqi = aqiValue.value.trim();

	if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
		alert("城市名请输入中英文字符");
		return;/*注意退出函数*/
	}
	if(!aqi.match(/^\d+$/)){
		alert("指数请输入整数");
		return;
	}
	aqiData[city] = aqi;/*学习此种赋值*/
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for(var city in aqiData){
		items += "<tr><td>" + city + "</td><td>" + aqiData[city] + "</td><td><button class='del-btn'>删除</button></td></tr>";
	} 

	document.getElementById("aqi-table").innerHTML=city?items:"";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").addEventListener("click",addBtnHandle);

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById("aqi-table").addEventListener("click",function(event){
  	var target = event.target;
  	if(target&&target.nodeName.toLowerCase === "button"){
  		delBtnHandle(target);
  	}
  });
}

init();

/*总结：
1、aqiData[city] = aqi;学习此种赋值方式；
2、value后面不要加（），它不是一种方法；
3、渲染表格时，用innerHTML，比操作DOM效率更高；
4、注意script标签的位置，如果放在head中总会出现无法获取document.getElementById("add-btn")
原因是此时还未加载整个dom，从而无法获取到相关节点。所以要放在尾部。
5、学习事件委托，提高性能。target.nodeName返回的是大写。
*/
