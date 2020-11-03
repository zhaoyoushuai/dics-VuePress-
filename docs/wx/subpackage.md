# 小程序分包

## 小程序分包

### 原因

小程序主包或分包不能超过2M，总包大小不能超过16M，分包还可以优化小程序的首次启动时间。  

### 1.创建与pages同级的目录
![路径示例](/assets/img/wx/subpackage1.png)

### 2.在pages.json中配置分包目录结构
![配置示例](/assets/img/wx/subpackage2.png)

### 3.分包后效果
![效果展示](/assets/img/wx/subpackage3.png)

### 注意

> 每个分包页面最好不超过12个页面，Tabbar页面必须放到主包  

## 图片分包

## uni-app图片分包

### 原因

uni-app在打包的过程中图片不会被压缩，并且图片会被打包到主包，非常占用主包内存资源，所以进行图片分包的步骤


### 1.首先开启分包优化

在manifest.json文件(很好奇为啥不是main而是mani)源码视图中,"mp-weixin"中配置以下代码


![配置示例](/assets/img/wx/subpackage4.png)

``` js
"optimization":{
        "subPackages":true
    }
```


### 2.在分包跟目录中创建static目录用于放置静态资源

![路径示例](/assets/img/wx/subpackage5.png)

### 3.打包后效果

![打包结果示例](/assets/img/wx/subpackage6.png)

> 成功打包到分包中，并且不占用主包内存

## taro图片分包

### 使用import方式引用图片

![import引用示例](/assets/img/wx/subpackage7.png)