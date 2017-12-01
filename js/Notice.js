var delid;
function BusinessDel(id) {
    delid = id;
    $('.delAlert').css({display:'block'});
}
//确定删除
function sureDel() {
    $.ajax({
        url:"",
        data:delid,
        success:function () {
            
        }
    })
    $('.delAlert').css({display:'none'});
}
//  取消删除
function noDel() {
    $('.delAlert').css({display:'none'});
}

//这里的结束时间格式应该是  1992-09-09
var objlinshi = {name:"45",notice:"城市1",starttime:"",endtime:"1508232601971",inner:"法规法规规范"}
function BusinessEdit(obj) {
    $('.addAlert').css({display:'block'});
    $('.addBox').find('input').map(function () {
        $(this).val(objlinshi[$(this).attr('name')]);
    })
    $('.notice').val(objlinshi.notice);
    $('.text_inner').val(objlinshi.inner);
}
//取消添加
function noAdd() {
    $('.addAlert').css({display:'none'})
}
function clearword() {
    $('.addBox-word').html('');
}
$(function () {
    // 限制可选日期
    var myDate = new Date().getTime();
    $('#date_e').cxCalendar({
        startDate:myDate,
    });

    $('.BusinessAdd').click('on',function () {
        $('.addAlert').css({display:'block'})
    })

    var obj = {name:"",notice:"",starttime:"",endtime:"",inner:""};
    $('#sureAdd').click('on',function () {
        $('.addBox').find('input').map(function () {
            obj[$(this).attr('name')] = $(this).val();
            console.log($(this).attr('name')+"++++++++++++"+$(this).val())
        })
        obj.notice = $('.notice').val();
        obj.inner = $('.text_inner').val();
        obj.starttime = myDate;
        console.log(obj);
        if(obj.name==""||obj.notice==""||obj.starttime==""||obj.endtime==""||obj.inner==""){
            $('.addBox-word').html('请填写完整的信息！');
        }else{
            $('.addAlert').css({display:'none'})
            $.ajax({
                url:'',
                data:obj,
                success:function () {

                }
            })
        }
    })
})