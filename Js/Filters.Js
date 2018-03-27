///<reference path="App.js"/>

myApp.filter("Gender", function () {
    return function (Gender) {
        switch (Gender) {
            case 1:
                return "Male";
            case 2:
                return "Female";
            case 3:
                return "Not Found";

        }

    }
});