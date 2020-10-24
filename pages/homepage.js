let homepage = function () {

    let input1 = element(by.model('first'));
    let input2 = element(by.model("second"));
    let go = element(by.css('[ng-click="doAddition()"]'));


    this.get = function (url) {
        browser.get(url);
    }

    this.enterFirstNumber = function (num1) {
        input1.sendKeys(num1);

    }

    this.enterSecondNumber = function (num2) {
        input2.sendKeys(num2)

    }

    this.clickGo = function () {
        go.click();
    }

    this.verifyResult = function (result) {
        let actual = element(by.cssContainingText('.ng-binding', result));
        expect(actual.getText()).toEqual(result);
    }
}
module.exports = new homepage();
