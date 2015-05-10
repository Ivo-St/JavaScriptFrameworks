/*global app*/

app.service('VideosData', function () {
    this.getVideos = function () {
        return data;
    };

    //fixme fix insertVideo's parameters
    this.insertVideo = function (title, pictureUrl, category, date, haveSubtitles) {
        var video = {
            title: title,
            pictureUrl: pictureUrl,
            category: category,
            date: date,
            haveSubtitles: haveSubtitles
        };

        data.push(video);
    };

    var data = [{

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
    }];
});
