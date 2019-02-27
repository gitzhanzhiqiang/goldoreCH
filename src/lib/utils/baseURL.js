export default function baseURL(data) {
    let text = '';
    //  console.log("111",data)
    if (data) {
         console.log(data.url)
        if (data.url =='news/page' || data.url =='code/smsCode' || data.url =='news/getWithPreNextId' || data.url =='news/' || data.url =='/tApplyActivity/add'  || data.url =='tApplyActivity/checkSmsCode'  || data.url =='/code/mailCode' ) {
            text = 'http://www.gold-ore.io/sunfin_content/'
        } else {
            text = 'http://www.gold-ore.io/goldore/app/api/'
        }
    }else{
        text = 'http://www.gold-ore.io/goldore/app/api/'
    }

    return  text;
    // return "http://192.168.0.15:9999/"
    //   return "http://192.168.0.13:8084/sunfin_content/"
    // return "http://www.gold-ore.io/sunfin_content/"
    // return 'http://192.168.1.128:8084/sunfin_content/'
    // return 'http://192.168.1.115:8024/sunfin/app/' //韩宏国
    // return 'http://192.168.0.13:8024/sunfin/app/' //测试
    //     return 'http://192.168.1.144:8024/sunfin/app/' //韩宏国
    // return 'http://192.168.1.177:8024/sunfin/app/'
}