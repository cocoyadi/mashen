$(document).ready(function(){
//$("#select a").click(function() {
//	console.log(11);
//	//		 this.addClass("show");
//	//		 console.log(this);
//});
//function show (i) {
//	console.log(2222222)
//	$(".signUp").remove("show");
//	$(".signUp").eq(i).addClass("show");
//}
	var nameFlag=false,phonumFlag=false;
	$("select").change(function(){
		var sum=$('select').val();
		$('.signUp').attr('class','signUp');
		console.log($('.signUp').length)
		$('.signUp').eq(sum-1).attr('class','signUp show');
	})

//var sel=document.getElementsByTagName('select')[0];
//sel.onchange=function(){
//	console.log(sel.option[0])
//}
//function change(obj){
//	 alert(obj.val());
//}
 //表单验证
	$("#name").blur(function(){
		if($(this).val()==""||$(this).val()==null){
			$(".nameFlag").text("名字不能为空");
		}else{
			nameFlag=true;
			$(".nameFlag").text("");
		}
	});
	$("#phonum").blur(function(){
		if($(this).val()==""||$(this).val()==null){
			$(".phonumFlag").text("手机号码不能为空");
		}else{
			phonumFlag=true;
			$(".phonumFlag").text("");
		}
	});
//点击按钮进行异步更新
	$('#sub_btn').click(function(){
		if(phonumFlag&&nameFlag){
			var options = {
				target:    null,
				url:        '/mashen-api/add.action',
				type:"POST",
				dataType:  'json',
				data:{"name":$("#name").value,"degree":$("#degree").value,"phonum":$("#phonum").value,
					"intention":$("#intention").value,"school":$("#school").value},
				success: function() {
					alert('报名成功');
				} };

			// 将options传给ajaxForm
			$('#Application_form').ajaxSubmit(options);
		}else{
			alert("请完善提交信息");
		}

	});

	//$('#Application_form').bootstrapValidator({
	//	feedbackIcons: {
	//		valid: 'glyphicon glyphicon-ok',
	//		invalid: 'glyphicon glyphicon-remove',
	//		validating: 'glyphicon glyphicon-refresh'
	//	},
	//	fields: {
	//		name: {
	//			validators: {
	//				notEmpty: {
	//					message: '不能为空'
	//				}
	//			}
	//		},
	//		phonum: {
	//			validators: {
	//				notEmpty: {
	//					message: '手机号码不能为空'
	//				}
	//			}
	//		}
	//	}
	//});
});
