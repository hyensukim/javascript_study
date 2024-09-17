// jQuery 사용 시 최초 설정
$(document).ready(function(){
    
    if($.localStorage.isSet('memo')){
        $('.tarea').val($.localStorage.get('memo'));
    }
    $('.btn_area').click(function(){
        $.localStorage.set('memo',$('.tarea').val());
        alert('저장 되었습니다.');
    })
});