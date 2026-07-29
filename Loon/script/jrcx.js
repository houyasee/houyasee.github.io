/**
 * jinricx 开屏广告跳过
 * 修改 Start组件初始化逻辑
 */

let body = $response.body;

if (!body) {
    console.log("body为空");
    $done({});
}

// 压缩代码兼容
let reg = /m\(\)\s*,\s*r\(\)\s*,\s*pz\(\)/;

if (reg.test(body)) {

    body = body.replace(
        reg,
        "c(),pz()"
    );

    console.log("jinricx 开屏跳过成功");

} else {

    console.log("未找到 Start 初始化代码");

}


$done({
    body: body
});
