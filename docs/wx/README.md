# 开放能力



## 获取模板推送流程

``` js
    var templateId = ['u4LAYGGAJmDemu_xCriPL5Qe2ktGOhE4tIWLip2lerA']

    if(wx.requestSubscribeMessage){
        wx.requestSubscribeMessage({
            //数组模板集合
            tmplIds:templateId
            success(){
                if (that.getTemplateIdStatus(res, 'accept')) {
                    console.log('success')
                } else if(that.getTemplateIdStatus(res, 'reject')){
                // 用户历史操作有设置了拒绝 or 关闭了订阅消息的主（总）开关，导致无法
                // 推送,只有在用户勾选了记住选项后才会提示手动开启 
                // （getSetting会获取到记住选项的模板id）
                }
                wx.getSetting({
                    withSubscriptions: true,
                    success: gres => {
                        let needModal = false
                        for (const tempId of templateId) {
                            if (gres.subscriptionsSetting[tempId] && gres.subscriptionsSetting[tempId] == 'reject') {
                                needModal = true
                                break
                            }
                        }
                        if (needModal) {
                            //引导开启
                            that.guideOpenSubscribeMessage()
                        } else {
                            console.log('success')
                        }
                    }
                })
            },
            fail(){
                // 20004:用户关闭了主开关，无法进行订阅,引导开启
                if (res.errCode == 20004) {
                    that.guideOpenSubscribeMessage()
                }
            }
        })
    }else{
        alert('请更新您微信版本，来获取订阅消息功能')
    }

    // 微信引导用户 手动引导用户去设置页开启，
    // 只有在勾选过不提示选项后才会弹窗手动设置
    guideOpenSubscribeMessage() {
        let that = this;
        wx.showModal({
            content: '检测到您没有开启订阅消息的权限，是否去设置？',
            success(res) {
                //用户点击了确定按钮，进入设置页的回调
                if (res.confirm) {
                    wx.openSetting({
                        success: res => {
                            that.guidSubscribeMessageAuthAfter();
                        }
                    })
                }
                //用户点击了取消按钮
                else if (res.cancel) {
                    that._fallback()
                }
            }
        })
    }
    // 微信引导用户 开启订阅消息 之后，「openSetting」 接口暂时不会返回，用户手动设置后的状态，所以采用「getSetting」接口重新进行查询
    guidSubscribeMessageAuthAfter() {
        const that = this
        wx.getSetting({
            withSubscriptions: true,
            success: res => {
                let {
                    authSetting = {},
                    subscriptionsSetting: { mainSwitch = false, itemSettings = {} } = {}
                } = res;
                if ((authSetting['scope.subscribeMessage'] || mainSwitch) &&that.getTemplateIdStatus(itemSettings, 'accept')) {
                     console.log('用户手动开启同意了，订阅消息');
                } else {
                     console.log('订阅失败');
                }
            }
        });
    }
    // 获取消息id的授权状态
    getTemplateIdStatus = (res, status) => {
        if (templateId.length < 1) return false
        let flag = true
        for (const formId of templateId) {
            if (res[formId] != status) {
                flag = false
                break
            }
        }
        return flag
    }
```