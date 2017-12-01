var delid;
//删除表格的id
function BusinessDel(id) {
	delid = id;
	$('.delAlert').css({display:'block'});
}
//确定删除
function sureDel() {
	$.ajax({
		url:'',
		data:delid,
		success:function () {
			$('.delAlert').css({display:'none'});
		}
	})
}
//取消删除
function noDel() {
	$('.delAlert').css({display:'none'});
}
