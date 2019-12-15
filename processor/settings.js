const CheckData = (user, db, callback) => {
    let results = {
        loginExists: false,
        emailExists: false,
        differentPasswords: false
    };

    let makeCheck = new Promise((resolve, reject) => {
        const login = { 'login': user.login };
        db.collection('users').findOne(login, (err, item) => {
            resolve(results);
            if (item !== null) {
                results.loginExists = true;
                resolve(results);
            }

            if (user.password !== user.passwordConfirmation) {
                results.differentPasswords = true;
                resolve(results);
            }
        })
    
        const email = { 'email': user.email };
        db.collection('users').findOne(email, (err, item) => {
            if (item !== null) {
                results.emailExists = true;
                resolve(results);
            }
        })    
    })

    makeCheck
        .then(data => {
            callback(data);
        })
}

const CheckUser = (user, db, callback) => {
    console.log(db)
    const login = { 'login': user.login };
    db.collection('users').findOne(login, (err, item) => {
        if (item === null) {
            callback(null);
        }
        else {
            if (item.password === user.password) {
                callback(item);
            } 
            else {
                callback(null);
            }
        }
    })
}

module.exports = { CheckData, CheckUser };