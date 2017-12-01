$(function () {
    // $('.EconomicsAdd').click('on',function () {
    //     $('.addpower-input').css({display:'block'})
    // })
    // $('.FinanceAdd').click('on',function () {
    //     $('.addpower-input1').css({display:'block'})
    // })
    $('.ContrastAdd').click('on',function () {
        $('.addpower-input2').css({display:'block'})
    })

    //取消添加经济指标
    $('#del-adpower').click('on',function () {
        $('.addpower-input').css({display:'none'});
    })
    //确认添加经济指标
    $('#sure-addpower').click('on',function () {

        $('.addpower-input').css({display:'none'});
        var addpower = $(this).prev().val();
        console.log(edit_tab,addpower);
        if(edit_tab.word == 'Economics'){
            if(addpower!=""){
                $.ajax({
                    url:'',
                    data:{id:edit_tab.id,addpower:addpower},
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
        $(this).prev().val('');
    })

    //取消添加金融基础指标
    $('#del-finance').click('on',function () {
        $('.addpower-input1').css({display:'none'});
    })
    //确认添加金融基础指标
    $('#sure-addfinance').click('on',function () {

        var addpower = $(this).prev().val();
        $('.addpower-input1').css({display:'none'});
        console.log(edit_tab,addpower);
        if(edit_tab.word == 'Finance'){
            if(addpower!=""){
                $.ajax({
                    url:'',
                    data:{id:edit_tab.id,addpower:addpower},
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
        $(this).prev().val('');
    })

    //取消添加对比分析
    $('#del-Contrast').click('on',function () {
        $('.addpower-input2').css({display:'none'});
    })
    //确认添加对比分析
    $('#sure-addContrast').click('on',function () {

        var addpower = $(this).prev().val();
        $('.addpower-input2').css({display:'none'});
        console.log(edit_tab,addpower);
        if(edit_tab.word == 'Contrast'){
            if(addpower!=""){
                $.ajax({
                    url:'',
                    data:{id:edit_tab.id,addpower:addpower},
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
        $(this).prev().val('');
    })
    var obj = {name:'',company:''}
    $('#sureAdd').click('on',function () {
        $('.addBox').find('input').map(function () {
            obj[$(this).attr('name')] = $(this).val();
        })
        console.log(obj);
        if(obj.name==''||obj.company==''){
            $('.addBox-word').html('请填写完整的信息');
        }else{
            $.ajax({
                url:'',
                //addword  是你添加的是经济指标还是金融基础指标  obj是添加的内容
                data:{addword:addword,obj:obj},
                success:function () {

                }
            })
            $('.addAlert').css({display:'none'});
        }
    })
})
var delnum,delword,addword,editobj={name:'5656',company:'67676'},editid=null;
function BusinessDel(num,word) {
    console.log(num,word);
    delnum = num;
    delword = word;
    // word 分为三种情况   分别是 Economics（经济）  Finance（金融） Contrast（分析）
    // num  传入的是删除的那一项
    // 两个结合起来就可以准确地判断出删除的数据是那一条
   $('.delAlert').css({display:'block'})
}
// 确定删除
function sureDel() {
    noDel();
    $.ajax({
        url:'',
        data:{delnum:delnum,delword:delword}
    })
}
//取消删除
function noDel() {
    $('.delAlert').css({display:'none'})
}
//编辑信息 三个tab的编辑都写成了一个函数
var edit_tab = {id:null,word:null}
function JurisdictionEdit(id,word,name) {
    edit_tab.id = id;
    edit_tab.word = word;
    //id:编辑的唯一值 word:编辑的是哪一个tab  name:编辑的初始值
    if(word == 'Economics'){
        $('.addpower-input').css({display:'block'})
        $('.addpower-input').find('input').map(function () {
            $(this).val(name);
        })
    }else if(word == 'Finance'){
        $('.addpower-input1').css({display:'block'})
        $('.addpower-input1').find('input').map(function () {
            $(this).val(name);
        })
    }else{
        $('.addpower-input2').css({display:'block'})
        $('.addpower-input2').find('input').map(function () {
            $(this).val(name);
        })
    }
}

//点击天借时间
function addRow(word){
    $('.addAlert').css({display:'block'});
    addword = word;
}
function noAdd() {
    $('.addAlert').css({display:'none'})
}
function clearword() {
    $('.addBox-word').html('');
}

//编辑  id 编辑的唯一值   com 分别为经济指标和金融基础指标   obj 要修改的对象{name：”“，company：”“} 格式要正确啊  如果你的obj里面包含了id  拿id就可以去掉了

function editRow(id,com,obj) {
    editobj = obj;
    addword = com;
    editid = id;
    $('.addAlert').css({display:'block'});
    $('.addBox').find('input').map(function () {
        $(this).val(editobj[$(this).attr('name')]);
    });
}