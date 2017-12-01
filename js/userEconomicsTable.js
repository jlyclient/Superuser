var delid,delrc;
// delrc 删除的是行  还是列  delid  删除的id
function BusinessDel(id) {
	delid = id;
	$('.delAlert').css({display:'block'});
}
function sureDel() {
	$.ajax({
		url:'',
		data:{id:delid},
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

var edit_obj = {A:'dkoe',B:'dei',C:'sdc',D:'ghgh'}
function BusinessEdit(word) {
	$('.addAlert').css({display:'block'});
	$(".addBox").find('input').map(function () {
		$(this).val(edit_obj[$(this).attr('name')]);
	})
}
$(function () {
	$('.BusinessAdd').click('on',function () {
		$('.addAlert').css({display:'block'});
	})
	$('#sureAdd').click('on',function () {
		var inputval = {A:'',B:'',C:'',D:''};
		$(".addBox").find('input').map(function () {
			inputval[$(this).attr('name')] = $(this).val();
		})
		console.log(inputval);
		$('.addAlert').css({display:'none'});
		$.ajax({
			url:'',
			data:{value:inputval},
			success:function () {

			}
		})
	})
})


