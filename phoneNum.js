Page({
    data: {
        blockSend: false,
        clockNum: 61,
        clockTxt: '发送短信',
        phone: '',
        smsCode: '',
    },
    sendSms: function() {
        var _this = this;
        if (this.data.blockSend) {
            return;
        }
        this.setData({
            blockSend: true,
            clockTxt: '秒后重试',
            clockNum : 60,
        });
        var timer = setInterval(function(){
            if (_this.data.clockNum <= 0) {
                clearInterval(timer);
                return _this.setData({
                    clockNum: 61,
                    blockSend: false,
                    clockTxt: '发送短信'
                });
            }
            _this.setData({
                clockNum: (_this.data.clockNum - 1),
            });
        },1000);
    },
    bindPlateChange: function(event){
        this.data.plateVal = event.detail.value.toUpperCase();
        return event.detail = {value: this.data.plateVal};
    },
    bindPhoneChange: function(event){
        this.setData({
            phone: event.detail.value
        });
    },
    bindSmsChange: function(event){
        this.setData({
            smsCode: event.detail.value
        });
    }
})
