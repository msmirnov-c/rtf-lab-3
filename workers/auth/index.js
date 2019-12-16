function authUser(req, res, next) {
    console.log('outuser');
    res.json({userAuth: true})
}
function testFunc() {
    return;
}

module.exports = {
    authUser,
    testFunc
}
