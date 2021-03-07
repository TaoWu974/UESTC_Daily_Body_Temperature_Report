const axios = require('axios')

let args = process.argv.splice(2)
result = args[0].split("#");
console.log(result)

for (let cookie of result) {
    checkReport(cookie)
}


function checkReport(cookie) {
    axios({
        url: "https://jzsz.uestc.edu.cn/wxvacation/checkRegisterNew",
        method: 'get',
        data: {},
        headers: {
            'content-type': 'application/json',
            "User-Agent": "Mozilla / 5.0(Linux; Android 9; G8441 Build / 47.2.A .6 .30; wv) AppleWebKit / 537.36(KHTML, like Gecko) Version / 4.0 Chrome / 66.0 .3359 .158 Mobile Safari / 537.36 MicroMessenger / 7.0 .13 .1640(0x27000D39) Process / appbrand3 NetType / WIFI Language / zh_CN ABI / arm64 WeChat / arm64",
            "Accept-Encoding": "gzip, compress, br, deflate",
            "Content-Length": "2",
            "encode": false,
            "Connection": "keep-alive",
            "x-tag": "flyio",
            "charset": "utf-8",
            "cookie": cookie,
            "Referer": "https://servicewechat.com/wx521c0c16b77041a0/28/page-frame.html"
        }
    }).then(function (response) {
        console.log(response.data)
        if (response.data.data.appliedTimes === 0) {
            reportBodyTemperature(cookie)
        }
    }, function (err) {
        console.log("err", err)
    })
}


function reportBodyTemperature(cookie) {
    axios({
        url: "https://jzsz.uestc.edu.cn/wxvacation/monitorRegisterForReturned",
        method: 'post',
        data: {
            "healthCondition": "正常",
            "todayMorningTemperature": "36°C~36.5°C",
            "yesterdayEveningTemperature": "36°C~36.5°C",
            "yesterdayMiddayTemperature": "36°C~36.5°C",
            "location": "四川省成都市郫都区成灌高速公路"
        },
        headers: {
            'content-type': 'application/json',
            "User-Agent": "Mozilla / 5.0(Linux; Android 9; G8441 Build / 47.2.A .6 .30; wv) AppleWebKit / 537.36(KHTML, like Gecko) Version / 4.0 Chrome / 66.0 .3359 .158 Mobile Safari / 537.36 MicroMessenger / 7.0 .13 .1640(0x27000D39) Process / appbrand3 NetType / WIFI Language / zh_CN ABI / arm64 WeChat / arm64",
            "Accept-Encoding": "gzip, compress, br, deflate",
            "Content-Length": "220",
            "encode": false,
            "Connection": "keep-alive",
            "x-tag": "flyio",
            "charset": "utf-8",
            "cookie": cookie,
            "Referer": "https://servicewechat.com/wx521c0c16b77041a0/28/page-frame.html"
        }
    }).then(function (response) {
        console.log(response.data)

    }, function (err) {
        console.log("err", err)
    })
}