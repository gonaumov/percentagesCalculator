/*
$(document).ready(function() {
	$("input").keypress(function (e)  
	{ 
	  if( e.which!=8 && e.which!=0 && (e.which<48 || e.which>57))
	  {
		$("#errmsg").html("Моля въвеждайте само числа!").show().fadeOut("slow"); 
	    return false;
      }	
	});
	$("button").click(function()  
	{ 
	  var _class = $(this).attr("class");
	  if(_class == "calc1")
	  {
			var a = $("#percent1").val()/100;
			var b = a*$("#amount1").val();
			$("#answer1").val(b);
	  }
	  else if(_class == "calc2")
	  {
			var a = $("#percent2").val();
			var b = $("#amount2").val();
			var c = a/b;
			var d = c*100;
			$("#answer2").val(d);
	  }
	  else if(_class == "calc3")
	  {
		 var a = $("#percent3").val();
		 var b = $("#amount3").val()/100;
		 var c = a/b;
		 $("#answer3").val(c);
	  }
	});
});
*/
function _onlyNumbers(e)
{
 if( e.which!=8 && e.which!=0 && (e.which<48 || e.which>57))
  {
	$("#errmsg").html("Моля въвеждайте само числа!").show().fadeOut("slow"); 
	return false;
  }		
}
function calc1()
{
	var a = $("#percent1").val()/100;
	var b = a*$("#amount1").val();
	$("#answer1").val(b);
}
function calc2()
{
	var a = $("#percent2").val();
	var b = $("#amount2").val();
	var c = a/b;
	var d = c*100;
	$("#answer2").val(d);	
}
function calc3()
{
	var a = $("#percent3").val();
	var b = $("#amount3").val()/100;
	var c = a/b;
	$("#answer3").val(c);	
}

