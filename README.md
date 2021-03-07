# UESTC_Daily_Body_Temperature_Report

**成电/电子科技大学每日体温上报**

**成电现在每天都要上报体温，这有点烦人，而且还有偶尔会忘记的情况，该项目利用Github的Actions实现每日体温自动上报**

## 使用简介

 - 这个项目写的很简单，作用也不是很大，因为需要获取你的Cookie才能实现自动上报
 - 获取Cookie方法可以通过抓包，作者是使用Charles+Proxifier抓取电脑版微信的“uestc学生情况报送”小程序的Cookie（一般都会这步的人都可以自己写自动上报了，所以说作用不大）

## 使用方法

 - 自行抓取你的```Cookie```
 - ```Fork```此仓库
 - 在自己的项目界面，点击 ```Settings```-->```Secrets```-->```New secret Secrets```
 -  创建```COOKIE```，把你抓到的```Cookie```粘贴到```Value```中
 -  启动Action，运行结果在```build```的```Run Main```展示
