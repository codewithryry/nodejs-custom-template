exports.homepage = (req, res) => {
    res.render('index'); 
};

exports.aboutPage = (req, res) => {
    res.render('about'); 
};

exports.loginPage = (req, res) => { 
    res.render('login'); 
};


exports.contactPage = (req, res) => { 
    res.render('contact'); 
};

exports.registerPage = (req, res) => { 
    res.render('register'); 
};
