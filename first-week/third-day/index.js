
/**
 * 功能需求需要使用Swiper插件，无造轮子的必要
 * 主要功能: tab切换，轮播图
 * @class Main
 */
class Main () {
    constructor () {
        this.swiperChange();
    }
    swiperChange () {
        new Swiper ('.container', {
            pagination: '.js-page3 .swiper-pagination', // 分页容器
            paginationClickable: true, // 分页按钮是否能点击
            nextButton: '.js-page3 .swiper-button-next', // 下一张
            prevButton: '.js-page3 .swiper-button-prev', // 上一张
            spaceBetween: 30,
            loop: true, // 是否循环
            effect: 'fade', // 切换的效果
            paginationBulletRender: function (swiper, index, className) {  // 分页按钮带有数字渲染
                return '<span class="' + className + '">' + index + '</span>';
            },
            onSlideChangeEnd: function (swiper) {  // move切换结束的回调函数
                for (let i = 0, len = btnArr.length; i < len; i++) {
                    $('.yue-jun').eq(i).css('opacity', 0);
                }
                $('.yue-jun').eq(swiper.realIndex).css('opacity', 1);
            }
        })
    }
}

(
    new Main();
)();