/**
 * Created by jo on 2017/7/31.
 */
$(function () {
    //iSearch 搜索切换
    (function () {
        var $search = $('#iSearchOption li'),
            $optDisplay = $('.iSearchText'),
            $optNow = 0,
            $optExample = [
                '例如000000',
                '例如111111',
                '例如222222',
                '例如333333',
                '例如444444',
            ];
        $optDisplay.val($optExample[$optNow]);
        $search.each(function (i) {
            $(this).click(function () {
                $search.attr('class','gradient');
                $(this).attr('class','active');
                $optDisplay.val($optExample[i]);
                $optNow = i ;
            });
        });
        $optDisplay.focus(function () {
            if($(this).val() == $optExample[$optNow]){
                $(this).val('');
            }
        });
        $optDisplay.focusout(function () {
            if(!$optDisplay.val()){
                $optDisplay.val($optExample[$optNow]);
            }
        });
    })();
    //iSearch 文字滚动
    (function () {
        var $latestNewsDiv = $('.latestNews'),
            $latestNewsUl = $latestNewsDiv.find('ul'),
            $newsLiHeight =  0,
            $latestNewsContent = [
                {'newsN':'萱萱','newsT':'5分钟前','newsC':'写了一篇新文章：那些灿烂华美的瞬间…'},
                {'newsN':'份饭','newsT':'6分钟前','newsC':'写了一篇新文章：那些灿烂华美的瞬间…'},
                {'newsN':'啊啊','newsT':'7分钟前','newsC':'写了一篇新文章：那些灿烂华美的瞬间…'},
                {'newsN':'仍然','newsT':'8分钟前','newsC':'写了一篇新文章：那些灿烂华美的瞬间…'}
            ],
            $latestNewsLi = '',
            $newsUp = $('#newsUp'),
            $newsDown = $('#newsDown'),
            timer = null,
            $newsNow = 0;
        for(var i=0;i<$latestNewsContent.length;i++){
            $latestNewsLi += '<li><a href="#"><strong>'+$latestNewsContent[i].newsN+'</strong><span>'+$latestNewsContent[i].newsT+'</span>'+$latestNewsContent[i].newsC+'</a></li>';
        }
        $latestNewsUl.html($latestNewsLi);
        $newsLiHeight = $latestNewsUl.find('li').height();
        $newsUp.click(function () {
            newsMove(1);
        });
        $newsDown.click(function () {
            newsMove(-1);
        });
        $latestNewsDiv.hover(function () {
            clearInterval(timer);
        },autoMove);
        autoMove();
        function autoMove() {
            timer = setInterval(function () {
                newsMove(-1);
            },2000)
        }
        function newsMove(n) {
            $newsNow += n;
            if(Math.abs($newsNow) > $latestNewsContent.length-1){
                $newsNow = 0;
            }
            if($newsNow > 0){
                $newsNow = -($latestNewsContent.length-1);
            }
            $latestNewsUl.animate({'top':$newsLiHeight*$newsNow},2000);
        }
    })();
    //iMianOption 选项切换
    (function () {
        optionTab($('.optionTab'),$('.optionTabContent'));
        optionTab($('.tabNav3'),$('.tabNav3Content'));
        optionTab($('.tabNav4'),$('.tabNav4Content'));
        function optionTab($tab,$tabContent) {
            var $tabLi = $tab.children(),
                $tabContentUl = $tabContent.find('ul');
            $tabContentUl.hide().eq(0).show();
            $tabLi.each(function (i) {
                $(this).click(function () {
                    $tabLi.removeClass('active').addClass('gradient');
                    $(this).removeClass('gradient').addClass('active');
                    $tabContentUl.hide().eq(i).show();
                });
            });
        }
    })();
    // 自动播放的焦点图
    (function (){
        var oDiv = $('#fade'),
            aUlLi = oDiv.find('ul li'),
            aOlLi = oDiv.find('ol li'),
            oP = oDiv.find('p'),
            arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ],
            iNow = 0,
            timer = null;
        fnFade();
        autoPlay();
        aOlLi.click(function (){
            iNow = $(this).index();
            fnFade();
        });
        oDiv.hover(function (){
            clearInterval(timer);
        }, autoPlay);
        function autoPlay() {
            timer = setInterval(function () {
                iNow++;
                iNow%=arr.length;
                fnFade();
            }, 2000);
        }
        function fnFade() {
            aUlLi.each(function (i){
                if ( i != iNow ) {
                    aUlLi.eq(i).fadeOut().css('zIndex', 1);
                    aOlLi.eq(i).removeClass('active');
                } else {
                    aUlLi.eq(i).fadeIn().css('zIndex', 2);
                    aOlLi.eq(i).addClass('active');
                }
            });
            oP.text(arr[iNow]);
        }
    })();
});