$(function () {
    $('.Login-btn').click('on',function () {
        var obj={user:'',password:'',remember:false}
        $('.Login-box').find('input').map(function () {
            if($(this).attr('name')!='remember'){
                obj[$(this).attr('name')] = $(this).val()
            }else{
                obj[$(this).attr('name')] = this.checked;
            }
        });
        // console.log(obj);
        if(obj.user==""||obj.password==""){
            $('.Login-word').html('请输入用户名密码')
        }else{
            console.log(obj);
            $.ajax({
                url:'',
                data:obj,
                success:function(e){
                    //这里需要返回三种结果  1 用户不存在   2 密码输入错误  3 登陆成功
                    if(e=='no_user'){
                        $('.Login-word').html('该用户不存在')
                    }else if(e=='err_password'){
                        $('.Login-word').html('密码输入错误')
                    }else{
                        //登陆成功  
                        
                    }
                }
            })
        }
    })
    $('.Login-box').find('input').map(function () {
        
    })
})
function clearword(){
    $('.Login-word').html('');
}
