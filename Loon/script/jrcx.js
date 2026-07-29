let body = $response.body;

console.log("=== jinricx script start ===");

if (!body) {
    console.log("body为空");
    $done({});
}


console.log("body length:", body.length);


if (body.includes("cdTimeAction")) {

    console.log("找到 cdTimeAction");


    body = body.replace(
        /xn\.getTimer\(["']cdTimeAction["'],\s*a,\s*1e3,\s*!0\)/,
        "c()"
    );


    console.log("替换完成");

} else {

    console.log("未找到关键代码");

}


$done({
    body: body
});
