# UESTC_Daily_Body_Temperature_Report

**成电/电子科技大学每日体温上报**

**仅适用于微信“uestc学生情况报送”小程序的学生情况报送**

**现在每天都要上报体温，这有点烦人，而且还有偶尔会忘记的情况，该项目利用Github的Actions实现每日体温自动上报**

## 使用简介

 - 这个项目写的很简单，作用也不是很大，因为需要获取你的Cookie才能实现自动上报
 - 获取Cookie方法可以通过抓包，作者是使用Charles+Proxifier抓取电脑版微信的“uestc学生情况报送”小程序的Cookie（一般会这步的人都可以自己写自动上报了，所以说作用不大）

## 使用方法

 - 自行抓取你的```Cookie```
 - ```Fork```此仓库
 - 在自己的项目界面，点击 ```Settings```-->```Secrets```-->```New secret Secrets```
 -  创建```COOKIE```，把你抓到的```Cookie```粘贴到```Value```中
 -  启动Action，运行结果在```build```的```Run Main```展示
  
## 注意事项
 - 每日自动上报时间是早上7点
 - 点击```Run workflow```可以手动触发Action
 - 可以设置多个Cookie，以#隔开，如Cookie1#Cookie2#Cookie3
 -  **Cookie失效时间未知**
