var delid,delrc;
// delrc 删除的是行  还是列  delid  删除的id
function BusinessDel(id,rc) {
	delid = id;
	delrc = rc;
	$('.delAlert').css({display:'block'});
}
function sureDel() {
	$.ajax({
		url:'',
		data:{rc:delrc,id:delid},
		success:function () {
			$('.delAlert').css({display:'none'});
		}
	})
}
function noDel() {
	$('.delAlert').css({display:'none'});
}

function clearword() {
	$('.addBox-word').html('');
}
function noAdd() {
	$('.addAlert').css({display:'none'});
}
var row_col ;
function BusinessEdit(word,rc) {
	row_col = rc;
	$('.addAlert').css({display:'block'});
	$(".addBox").find('input').eq(0).val(word);
}
$(function () {
	$('.BusinessAdd').click('on',function () {
		row_col = "row";
		$('.addAlert').css({display:'block'});
	})
	
	$(".addpower").click('on',function () {
		row_col = "col";
		$('.addAlert').css({display:'block'});
	})
	
	$('#sureAdd').click('on',function () {
		var inputval = $(".addBox").find('input').eq(0).val();
		console.log(inputval);
		$('.addAlert').css({display:'none'});
		$.ajax({
			url:'',
			data:{name:row_col,value:inputval},
			success:function () {
				
			}
		})
	})
})

