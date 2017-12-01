//删除用户的id
var delid = null;
//根据删除的内容不同传一个特定的字符串   例如 删除用户时传进来user 删除权限管理时 传进来power  根据这个写ajax是来判断删除的是什么  同事避免删除事件重复多次
var delroot = null;
//删除用户出现弹窗
function BusinessDel(id,root){
    console.log(id,root);
    delid=id;
    delroot = root;
    $('.delAlert').css({display:'block'})
}
//取消删除用户
function noDel(){
    $('.delAlert').css({display:'none'})
}
//取消添加用户
function noAdd(){
    add_edit = null;
    $('.addAlert').css({display:'none'});
}
//确认删除用户
function sureDel(){
    noDel();
    console.log(delid,delroot);
    $.ajax({
        uel:'',
        data:delid,
        success:function () {
            
        }
    })
}
function clearword(){
    $('.addBox-word').html('');
}
var add_edit = null;
//添加用户的对象  其中select  会有一个默认值极为初始值
var addsure = {name:'',city:'城市1',position:'职务1',department:'部门1',telephone:'',phone_number:''}
//编辑用户信息
//这里可接受一个参数  把当前这一条信息传进来 格式为一个对象 obj = {city:'',name:'',position:'',department:'',telephone:'',phone_number:''}
var objedit = {name:'aa',city:'城市2',position:'职务2',department:'部门2',telephone:'23',phone_number:'33'}
function BusinessEdit (obj){
    add_edit = 'edit';
    //如果有真实数据这里需要改动   这个函数里面所有的objedit 替换为接受的参数名称
    addsure = objedit;
    $('.addAlert').css({display:'block'});
    $('.selectcity').val(objedit.city);
    $('.selectposition').val(objedit.position);
    $('.selectdepartment').val(objedit.department);
    $('.addBox').find('input').map(function () {
        $(this).val(objedit[$(this).attr('name')]);
        console.log(objedit[$(this).attr('name')]);
    });
}
//编辑权限管理
var Jurisdictionnum = null;
function JurisdictionEdit(id,name) {
    Jurisdictionnum = id;
    $('.addpower-input').css({display:'block'});
    $('.addpower-input').find('input').map(function () {
        $(this).val(name);
    })
}
$(function () {
    $('.BusinessAdd').click('on',function () {
        add_edit = 'add';
        $('.addAlert').css({display:'block'});
    });


    //选择城市
    $('.selectcity').change('on',function () {
        console.log(this.value);
        addsure.city = this.value;
        $('.addBox-word').html('');
    })
    //选择职务
    $('.selectposition').change('on',function () {
        console.log(this.value);
        addsure.position = this.value;
        $('.addBox-word').html('');
    })
    //选择部门
    $('.selectdepartment').change('on',function () {
        console.log(this.value);
        addsure.department = this.value;
        $('.addBox-word').html('');
    });

    //确认添加或者修改用户
    $('#sureAdd').click('on',function () {
        $('.addBox').find('input').map(function () {
            addsure[$(this).attr('name')] = $(this).val();
        });
        if(addsure.name==''||addsure.telephone==''){
            $('.addBox-word').html('请填写完整信息！')
        }else{
            $('.addAlert').css({display:'none'});
            $.ajax({
                url:'',
                data:addsure,
                success:function () {
                    add_edit = null;
                    $('.addBox').find('input').map(function () {
                         $(this).val('');
                    });
                }
            })
        }
        console.log(addsure)
    })

    //添加权限
    $('.addpower').click('on',function () {
        $('.addpower-input').css({display:'block'});
    })
    //取消添加
    $('#del-adpower').click('on',function () {
        $('.addpower-input').css({display:'none'});
    })
    //确认添加
    $('#sure-addpower').click('on',function () {
        var addpower = $(this).prev().val();
        $('.addpower-input').css({display:'none'});
        if(Jurisdictionnum!=null){
            //这里为修改  修改的id 为 Jurisdictionnum
            if(addpower!=""){
                $.ajax({
                    url:'',
                    data:{id:Jurisdictionnum,esit:addpower},
                })
            }else{
                alert('修改内容不可为空，请输入正确的修改内容！')
            }
        }else{
            if(addpower!=""){
                $.ajax({
                    url:'',
                    data:addpower,
                })
            }
        }
        console.log();

        $(this).prev().val('');
    })

    //授权管理
    $('.sure-authorize').click('on',function () {
        //这里不确定你需要的数据是什么  一种是 只有授权的数组（例如  【'信息1','信息2'】）   还有一种是 包含每个权限以及其是否授权的TRUE FALSE 的对象（例如  {"信息1"：TRUE,"信息2"：FALSE,"信息3"：FALSE,"信息4"：TRUE}）

        var obj = {};

        var arr = [];

        $('.authorize').find('input').map(function () {
            //这个是包含所有权限以及是否添加的对象
            obj[$(this).attr('value')] = this.checked;
            //这个是添加权限的数组 数组里面有的就添加
            if(this.checked){
                arr.push($(this).attr('value'));
            }

        })

        $.ajax({
            url:'',
            //根据你的需求选择那种数据   剩下的一种可以删掉
            data:null,
        })
        console.log(obj,arr);
    })
    $('.cancle-authorize').click('on',function () {
        $('.authorize').find('input').map(function () {
            this.checked = false;
        })
    })
    
})



