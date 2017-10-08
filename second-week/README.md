# video略解 #

-    IOS微信是webkit内核，Android微信是X5的内核，IOS中视频能正常播放，但在Android中视频会全屏，这个问题还待解决，现在暂时无解

-    video属性坑很多，在不同的浏览器表现形式不一样，以下为一些基本的属性

-    style="object-fit:fill" 这个属性会让 Android 微信中的视频全屏

-    autoplay 顾名思义，让视频自动播放，但是在微信中这个属性不会生效，所以需要添加事件让其播放

-    webkit-playinline="true" 同样顾名思义，在webkit中让视频内嵌播放，也就是小窗播放，而不是全局播放，也就是在IOS10中小窗播放

-    playinline="true" IOS浏览器小窗播放

-    x5-video-player-type="h5" 启动H5的播放器，(貌似是flash播放器，只能小窗播放)

-    x5-video-player-fullscreen="true" 全屏设置，为true后防止横屏

-    $('#video')[0].play()能够在IOS中自动播放，但在Android中不能自动播放，这个问题有待解决，现在暂时无解(也就是模拟事件无效)

-    要使IOS8, 9正常播放，需要借助一个组件[iphone-inline-video](https://github.com/bfred-it/iphone-inline-video) 

# 基本的布局 #

-    涉及到div和video的切换，所以需要将要显示的div和video设置position: absolute，切记一定要相对relative的父级进行绝对定位

-    因为是单页面的应用。所以回退无效，可以用路由的方式标记当前的页面位置(或者根据需求而定)。

-    用z-index来对div和video的层级进行排序，避免一些不必要的bug

-   遇到一些单独的功能将其单独放在一个模块中，在主函数中用import引用并调用，避免一些bug的产生