var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}

function feedback() 
{
	
Name = (document.getElementById("login-field").value);
	
logg = (document.getElementById("login-field2").value);

pas1=(document.getElementById("pas-field1").value);

pas2=(document.getElementById("pas-field2").value);

if (Name == "" || logg == "" || pas1 == "" || pas2 == "") {
		
	if(Name == ""){
		alert("������� ���!");}

	else if(logg == ""){
		alert("������� �����!");}

	else if(pas1== ""){
		alert("������� ������!");}

	else {
		alert("��������� ������!");}
	}

else if (pas1!=pas2){
alert("������ ������ �������!");
}	
else {
		
	alert("������������ "+Name+" ������� ���������������! ������ ���� ����������� ����� �������...");

setTimeout(v1,3000); 
}}

function v1() 
{
window.close();
}

function op()
{
open("���.html");
}

function log(){
document.f1.logg.value="";
}

function log1(){
document.f1.ps.value="";
}

startdate = new Date();
clockStart = startdate.getTime();
function initStopwatch() {
  var thisTime = new Date(); 
  return (thisTime.getTime() - clockStart)/1000; 
}

function getSecs() {
  var tSecs = Math.round(initStopwatch());
  var iSecs = tSecs % 60;
  var iMins = Math.round((tSecs-30)/60);
  var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
  var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
  document.getElementById("timer-counter").innerHTML = sMins+":"+sSecs;
  setTimeout('getSecs()', 1000); 
}