var myApp = angular.module('app', []);

myApp.controller("mycontrol", function ($scope) {
    $scope.message = "Usman khan";
});

myApp.controller("increment", function ($scope) {
    $scope.val = 1;
    $scope.inc = function () {
        $scope.val += 1;
    };
    $scope.IsEven = function () {
        return $scope.val % 2 == 0
    }
});

myApp.controller("cityController",
    function ($scope) {

        var countries = [
            {
                Name: "Pakistan",
                Cities: [
                    { Name: "Lahore" },
                    { Name: "Islamabad" },
                    { Name: "Karachi" },
                    { Name: "Peshaware" },
                    { Name: "Multan" }

                ]
            },
            {
                Name: "China",
                Cities: [
                    { Name: "Bejing" },
                    { Name: "Shenzen" },
                    { Name: "HongKong" },
                    { Name: "Tianjin" }
                ]
            },
            {
                Name: "Turkey",
                Cities: [
                    { Name: "Anakara" },
                    { Name: "Istanbul" },
                    { Name: "Izmir" },
                    { Name: "Adana" }

                ]
            }

        ];

        $scope.countries = countries;
    });

myApp.controller("_Repeative",
    function ($scope) {


        debugger;
        var students = [
            { FirstName: "Usman", LastName: "Khan", Class: "BSSE", RollNo: 76 },
            { FirstName: "Usman", LastName: "Khan", Class: "BSSE", RollNo: 76 },
            { FirstName: "Usman", LastName: "Khan", Class: "BSSE", RollNo: 76 },
            { FirstName: "Usman", LastName: "Khan", Class: "BSSE", RollNo: 76 }
        ];
        $scope.students = students;
    });


myApp.controller("_techController",
    function ($scope) {
        var technologies = [
            { Name: "C#", Likes: 0, Dislikes: 0 },
            { Name: "Asp.Net", Likes: 0, Dislikes: 0 },
            { Name: "SQL Server(2018)", Likes: 0, Dislikes: 0 },
            { Name: "Angular JS", Likes: 0, Dislikes: 0 },
            { Name: "Node JS", Likes: 0, Dislikes: 0 }

        ];

        $scope.technologies = technologies;
        $scope.incrementLikes = function (technology) {
            technology.Likes++;
        };
        $scope.disLikes = function (technology) {
            technology.Dislikes++;
        };
    });

myApp.controller("FilterCtlr", function ($scope) {
    var employees = [
        { Name: "Usman", Salary: 5500, DateofBirth: new Date("Novemeber 23,1997"), Gender: "Male" },
        { Name: "Umer", Salary: 5500, DateofBirth: new Date("Novemeber 23,1997"), Gender: "Male" },
        { Name: "Saim", Salary: 5500, DateofBirth: new Date("Novemeber 23,1997"), Gender: "Male" },
        { Name: "Usama", Salary: 5500, DateofBirth: new Date("Novemeber 23,1997"), Gender: "Male" },
        { Name: "Salman", Salary: 5500, DateofBirth: new Date("Novemeber 23,1997"), Gender: "Male" }
    ];
    $scope.employees = employees;
    $scope.rowLimit = 5;
});

myApp.controller("sortingControl", function ($scope) {
    var employees = [
        { Name: "Usman", Salary: 5500, DateofBirth: new Date("August 23,1997"), Gender: "Male" },
        { Name: "Umer", Salary: 6500, DateofBirth: new Date("August 23,1997"), Gender: "FeMale" },
        { Name: "Saim", Salary: 7500, DateofBirth: new Date("August 23,1997"), Gender: "Male" },
        { Name: "Usama", Salary: 8500, DateofBirth: new Date("August 23,1997"), Gender: "FeMale" },
        { Name: "Salman", Salary: 1500, DateofBirth: new Date("August 23,1997"), Gender: "Male" }
    ];
    $scope.employees = employees;
    $scope.rowLimit = 5;
    $scope.sortedList = 'Name';
    $scope.reverseSort = false;
    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortedList == column) ? !$scope.reverseSort : false;
        $scope.sortedList = column;

    }
    $scope.getSortClass = function (column) {
        if ($scope.sortedList == column) {
            return $scope.reverseSort ? '.down' : '.up';
        }
        return " ";
    }
});


