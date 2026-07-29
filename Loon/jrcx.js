let body = $response.body;


if (body) {

    body = body.replace(
        /xn\.getTimer\("cdTimeAction",\s*a,\s*1e3,\s*!0\)/,
        "c()"
    );
}


$done({
    body
});
