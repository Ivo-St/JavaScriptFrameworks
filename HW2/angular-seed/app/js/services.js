/*global app*/

app.service('VideosData', function () {
    var data;
    if (!localStorage.videos) {
        init();
    }

    data = JSON.parse(localStorage.videos);

    this.getVideos = function () {
        return data;
    };

    this.insertVideo = function (title, pictureUrl, category, date, haveSubtitles, length) {
        var video = {
            title: title,
            pictureUrl: pictureUrl,
            category: category,
            date: date.toISOString(),
            haveSubtitles: haveSubtitles,
            length: length,
            subscribers: 0
        };
        data.push(video);
        localStorage.videos = JSON.stringify(data);
    };

    function init() {
        localStorage.videos = JSON.stringify([{

            title: 'Course introduction',

            pictureUrl: 'https://softuni.bg/Files/Publications/2015/04/softuni-news_185559167.png',

            length: '3:32',

            category: 'IT',

            subscribers: 3,

            date: new Date(2014, 12, 15),

            haveSubtitles: false,
            comments: [{
                username: 'Pesho Peshev',
                content: 'Congratulations Nakov',
                date: new Date(2014, 12, 15, 12, 30, 0),
                likes: 3,
                websiteUrl: 'http://pesho.com/'
            }]
        }]);
    }
});
