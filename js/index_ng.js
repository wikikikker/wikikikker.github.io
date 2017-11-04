/* writing angularJS code */
var home = angular.module('home', []);
var clrNum = 0;
var newsClrHistory = [];

home.controller('body-ctrl', function($scope, $http){

  $scope.newsData = ["News", "Data", "Fun", "Coding", "A5", "Frogs", "Green",
                          "Blue", "Space", "Agent", "AboutYou", "Happyness", "Having Fun",
                          "Happy Birthday", "Have a nice day"];

  $scope.setColor = function(elem){
    var colors = ["rgb(250,100,100)", "rgb(100,250,100)", "rgb(100,100,250)"];
    clrNum += 1;
    if(clrNum >= colors.length){
      clrNum = 0;
    }
    newsClrHistory.push(colors[clrNum]);
    return colors[clrNum];
  }

  $http.get('json/YT-Thumbnails.json').then(function(file){
    var data = file.data;
    $scope.ThumbnailsData = data.thumbnails;
  });

  $scope.GoToVid = function(){
    console.log('clicked');
  };

  $http.get('css/nav.css').then(function(file){
    var data = file.data;
    var nav_style = data.split('nav')[1].split('{')[1].split('}')[0];
    var a_style = data.split('a.nav-link')[1].split('{')[1].split('}')[0];
    var nav_padding_int = parseInt(a_style.split('padding')[1].split(':')[1].split('px')[0]);
    var nav_border_bottom_int = parseInt(nav_style.split('border-bottom')[1].split(':')[1].split('px')[0]);
    var a_height_int = parseInt(a_style.split('font-size')[1].split(':')[1].split('px')[0]) + 2;
    $scope.navHeight = nav_padding_int * 2 + nav_border_bottom_int + a_height_int + "px";
  });
});
