
module.exports = {
    logintest: function (Start) {
        /* 
         * Test Form validation and submission.
         */
        describe("Popup Login Form", function () {
            var modal,
                closeButton,
                mainContainer = "#main_container";

            beforeAll(function (done) {

                if (!$(mainContainer)[0]) {
                    $("body").append('<div id="main_container"><div class="loading-page"></div></div>');
                }
                $("body").append('<div class="nav-login"><a href="#" class="login">Log in</a></div>');

                Start.initMenu();
                Start.base = true;
                var loginObject = $("div .login");

                loginObject.click();

                //Not bothering with a promise.
                setTimeout(() => {
                    done();
                }, 500);
            });

            it("Login form - verify modal with login loaded", function () {

                modal = $("#modalTemplate");
                nameObject = $("#inputUsername");

                expect(modal[0]).toBeInDOM();
                expect(nameObject[0]).toExist();

                closeButton = $("button.close-modal");
                
                closeButton.click(function () {
                    setTimeout(() => {
                        expect(modal[0]).not.toBeInDOM();
                        expect(modal[0]).not.toExist(); 
                    }, 100);
                });
 
            });

            it("Login form - verify cancel and removed from DOM", function () {
                
                expect(modal[0]).toExist();
                closeButton.click();
                
                setTimeout(() => { closeButton.click(); }, 500);
            });

        });
    }
};