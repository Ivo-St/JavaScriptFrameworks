/*global app*/

app.controller('VideosController', function ($scope, VideosData) {
    $scope.videos = VideosData.getVideos();

    $scope.addVideo = function () {
        var title = $scope.newVideo.title;
        var picUrl = $scope.newVideo.pictureUrl;
        var category = $scope.newVideo.category;
        var length = $scope.newVideo.length || 0;
        var haveSubs = $scope.newVideo.haveSubtitles || false;
        var date = new Date();

        VideosData.insertVideo(title, picUrl, category, date, haveSubs, length);
    };
});
