# taro中拦截器模板
``` js
import Taro from '@tarojs/taro'

const requestInterceptor = async chain => {
    let {requestParams} = chain
    showLoading && Taro.showLoading({
        title: '加载中'
    })
    try {
        const {statusCode,data} = await chain.proceed(requestParams)
        showLoading && Taro.hideLoading()
        if (statusCode != 200) {
            //请求失败
            return [new Error(`${url} 请求错误 res.statusCode = ${statusCode}`), null]
        }else{
            //请求成功
            return [null, data.datas]
        }
    } catch (e) {   
        //请求失败
        Taro.showToast('网络错误')
        return [new Error('未知错误'), null]
    }
}

Taro.addInterceptor(requestInterceptor)

export const GET = (url, data, showLoading = true) => {
    return Taro.request({
        url: BASE_PATH + url,
        data: {
            ...data,
        },
        showLoading
    })
}

export const POST = (url, data, showLoading = true) => {
    return Taro.request({
        method: "POST",
        url: BASE_PATH + url,
        data: {
            ...data,
        },
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        showLoading
    })
}

export const UPLOAD = async (url, param, showLoading = true) => {
    showLoading && Taro.showLoading({
        title: '上传中'
    })
    try {
        let {
            statusCode,
            data
        } = await Taro.uploadFile({
            url:BASE_PATH + url,
            header: {
                'Content-Type': 'multipart/form-data',
            },
        })
        Taro.hideLoading()
        if (statusCode != 200) {
            return [new Error(`${url} 请求错误 res.statusCode = ${statusCode}`), null]
        }else{
            return [null, data.datas]
        }
    } catch (e) {
        Taro.showToast('网络错误')
        return [new Error('未知上传错误'), null]
    }
}
```