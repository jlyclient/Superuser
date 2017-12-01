
$(function () {
    var edit_add = {city:'',en_city:''}
    $('.BusinessAdd').click('on',function () {
        $('.addAlert').css({display:'block'})
    })
    $('#sureAdd').click('on',function () {

        $('.addBox').find('input').map(function () {
            edit_add[$(this).attr('name')] = $(this).val();
        })
        console.log(edit_add);
        if(edit_add.city==''||edit_add.en_city==''){
            $('.addBox-word').html('请将信息填写完成');
        }else{
            $('.addAlert').css({display:'none'});
            $.ajax({
                url:'',
                data:edit_add,
                success:function () {
                    $('.addBox').find('input').map(function () {
                        $(this).val('');
                    })
                }
            })
        }
    })
})
function noAdd() {
    $('.addAlert').css({display:'none'})
}
var delid = null;
//删除事件 出弹窗  id为删除的唯一值
function BusinessDel(id) {
    delid = id;
    $('.delAlert').css({display:'block'});
}
//确定删除
function sureDel() {
    $('.delAlert').css({display:'none'});
    $.ajax({
        url:'',
        data:delid,
        success:function (e) {

        }
    })
}
// 取消删除
function noDel() {
    $('.delAlert').css({display:'none'});
}

//编辑
var editobj = {ID:"1",city:'成都',en_city:'CD'}
function BusinessEdit(obj){
    $('.addAlert').css({display:'block'});
    $('.addBox').find('input').map(function () {
        $(this).val(editobj[$(this).attr('name')]);
    })
}

function clearword(){
    $('.addBox-word').html('');

}