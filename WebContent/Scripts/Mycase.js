//@ sourceURL=Mycase.js
var Mycase=(function () {

})();
$(function () {
    /*$('div#about h3#follow1').on('click',function () {
        $('div#about').css('display','none');
        $('div#follow').css('display','block');
    });*/
    $('a#learn2').on('click',function () {
        if($('div#brief_2 input[name="carCode"]').val()){
            if($('div#brief_2 input[name="carCode"]').val()==='浙B8P089'){
                $('div#brief_2').css('display','none');
                $('div#myFollow').css('display','block');
                //$('div.myContent').css('display','none');
                //$('footer.myContent').css('display','none');
            }else {
                alert('请输入正确的车牌号');
            }
        }else {
            alert('请输入车牌号');
        }
    });
    $('li.index').on('click',function () {
        $('div.eContent').css('display','none');
        $('div.myContent').css('display','block');

    });
    $('a#learn1').on('click',function () {
        $('div#brief_1').css('display','none');
        $('div#brief_1_china').css('display','block');
        $('div#brief_1_province').css('display','block');
    })
})

