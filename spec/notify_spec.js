let myTest = require("../src/notify");

describe("notification function", function () {
  var user = new myTest.Verify("0815523468", "registerd");
  it("Should call the function getNumber()", function () {
    spyOn(user, "getNumber");

    user.notification();

    expect(user.getNumber).toHaveBeenCalled();
  });

  it("Should call the function getText()", function () {
    spyOn(user, "getText");

    user.notification();

    expect(user.getText).toHaveBeenCalled();
  });
});
