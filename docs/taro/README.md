# taro-deploy自动化部署(保姆版)

## 使用自动化部署的原因

#### 在使用Taro中经常遇到的流程

>1. 开发完之后执行build命令
>2. 打开小程序发布新版本
>3. 去微信开发者网站设置为体验版
>4. 将二维码发送给测试人员

以上4个步骤表面看起来很简单，但是每次操作都会占用10-20分钟的时间，效率很低。
taro-deploy自动化部署的优势在于将上面步骤化繁为简，你需要做的就是执行一句命令，然后去上个厕所遛个弯，等待构建结果即可！



## 1. 安装taro-deploy

``` js
npm i -g taro-deploy
```

## 2. 准备小程序密钥

 -  把密钥下载到本地
![下载到本地密钥](/assets/img/taro/taro1.png)

 - 把本地IP添加到白名单

![添加白名单](/assets/img/taro/taro2.png)

## 3.创建钉钉提醒机器人(pc端)

- 点击头像，机器人管理

![实例](/assets/img/taro/taro3.png)

- 点击自定义机器人

![实例](/assets/img/taro/taro4.png)

- 自定义关键词填上小程序构建。

![实例](/assets/img/taro/taro5.png)

- 构建完成，保存`webhook url`

![实例](/assets/img/taro/taro6.png)

## 4.添加配置文件

- 在Taro项目根目录添加一个`deploy-config.js`文件内容给如下

```js
// deploy-config.js
// 该文件应放在 Taro 项目的根目录下

module.exports = {
  // 构建结果的输出目录，该脚本产生的日志也会输出到这里
  outDir: './deploy-out',

  // 微信相关配置
  weapp: {
    // 如果为 false，则不会运行微信的构建流程
    enable: true,

    // 这里填你们配置的 Taro 编译后微信程序包的输出路径
    projectPath: './dist/weapp',

    // Step 2 里获得的私钥文件的存放路径
    keyPath: './weapp.key',

    // 微信小程序 appId
    appId: 'wx82xxxxxx',

    // 微信体验版图片地址
    // 微信的体验版地址是一直不变的因此需要在这里配置该二维码图片的链接
    // 直接从微信公众平台上复制的体验版图片地址貌似无法在钉钉里正常展示
    // 建议转存到自己的 CDN 上，再将 cdn url 填到下面这里来
    qrcodeImageUrl: 'https://xxxcdn.con/image/weapp-exp-qrcode.jpg',

    // 小程序版本号
    // 由于微信的命令行 sdk 不支持设置某个版本为体验版，要改设体验版需要在网页上手动操作
    // 所以只能曲线救国，先在网页上将本工具上传的版本设为体验版（找到 ci机器人1 上传的那个版本）
    // 然后每次上传都指定同一个版本号，以覆盖旧的版本，最终实现发布新体验版的效果
    version: '1.1.0',

    // true 则将跳过编译阶段，即 taro build 命令，
    skipBuild: false,
  },


  // 默认发体验版，填 false 则发布为预览版
  // 注意如果发布为预览版，需要实现 uploadImage 的函数，否则钉钉无法展示预览版的二维码
  isExperience: true,

  // 是否在构建前运行 npm install
  npmInstall: false,

  // 指定环境变量，会在编译阶段，即 taro build 的指令中注入指定的环境变量
  env: {
    BUILD_ENV: 'test' // 仅作 demo，实际应填入你项目编译需要用的环境变量
  },

  // Step 3 中获取的钉钉机器人 webhook url
  dingTalkUrl: 'https://oapi.dingtalk.com/robot/send?access_token=xxx',

  // 如果你只需要构建发布体验版小程序，则可忽略以下函数
  // 如果你需要构建发布预览版小程序，则需要实现该函数，将本地二维码图片文件转换为图片链接，否则无法将预览版二维码推送到钉钉群里
  // 其中 objectName 形如 {platform}-{timestamp}.jpg，作为建议保存的文件名
  // filePath 为本地预览版二维码图片的路径
  uploadImage: async function(objectName, filePath) {
    return ''
    // 如果你使用阿里云 oss 作 cdn，可以参考以下代码进行上传
    // const OSS = require('ali-oss')
    // const client = new OSS({
    //   region: 'oss-cn-xxx',
    //   accessKeyId: 'xxx',
    //   accessKeySecret: 'xxx',
    //   bucket: 'xxx',
    // })
    // await client.put(`preview/${objectName}`, filePath, {
    //   'Cache-Control': 'max-age=31536000'
    // })
    // return `https://xxx-oss-cdn.com/preview/${objectName}`
  }
}

```


## 5.运行taro-deploy

```js
taro-deploy
```
- 等待结果

![实例](/assets/img/taro/taro7.png)

## 部分BUG
### 部分W10编译错误如下
```js
Skip npm install.
Weapp: 正在编译...
error: spawn npx ENOENT
Error: spawn npx ENOENT
at Process.ChildProcess._handle.onexit (internal/child_process.js:267:19)
at onErrorNT (internal/child_process.js:469:16)
at processTicksAndRejections (internal/process/task_queues.js:84:21) {
errno: 'ENOENT',
code: 'ENOENT',
syscall: 'spawn npx',
path: 'npx',
spawnargs: [ 'taro', 'build', '--type', 'weapp' ]
}
```
- 解决方案1 全局安装NPX
- 解决方案2(亲测可行)  原因是taro的build无法执行,解决思路跳过自动化部署中的build，deploy-config中的skipBuild设置为true  在package.json里加一段json脚本"deploy:weapp": "npm run build:weapp && taro-deploy"