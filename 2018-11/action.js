const errCode = 54001; // 后端返回errCode状态码
// 如果540001就抛出错误码
if (errCode === 54001) {
    const scene_id = data && data.scene_id || 0;
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent && event.initCustomEvent('RISK_CONTROL', true, true, {
        scene_id: scene_id
    });
    document.dispatchEvent(event);
}

if (!(document && document.eventList && document.eventList.RISK_CONTROL)) {
    document.addEventListener('RISK_CONTROL', function(event) {
        !document.eventList && (document.eventList = {});
        document.eventList.RISK_CONTROL = true;
        const scene_id = (event.detail || {}).scene_id || 0;
        //强制跳转到验证码页面
        forward('vertification.html?scene_type=' + scene_id);
    })
}