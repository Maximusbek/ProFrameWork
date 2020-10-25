let homepage = require('../pages/homepage');

describe('demo calculator tests',function(){

    it ('addition test',function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('3');
        homepage.clickGo();
        homepage.verifyResult('5');

        browser.sleep(5000);

});

it ('subtraction test',function(){

    homepage.get('https://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber('2');
    homepage.enterSecondNumber('3');
    homepage.clickGo();
    homepage.verifyResult('5');

    browser.sleep(7000);

});


});