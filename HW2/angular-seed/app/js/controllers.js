/* global app */

app.controller('VideosController', function ($scope, VideosData) {
    $scope.videos = VideosData.getVideos();

    $scope.addVideo = function () {
        var title = $scope.newVideo.title;
        var picUrl = $scope.newVideo.pictureUrl;
        var category = $scope.newVideo.category;
        var haveSubs = $scope.newVideo.haveSubtitles || false;
        var date = new Date();

        //future add length parameter to insertVideo function

        VideosData.insertVideo(title, picUrl, category, date, haveSubs);
    };
});
