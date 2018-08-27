import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },
        {
            id: 2,
            title: '简书电影',
            imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
    ],
    articleList: [
        {
            id: 1,
            title: '我的堰头垸',
            desc: '昨天，我的公众号[别山举水]的后台，有一位朋友发来留言。他说他叫某某，是堰头垸四组的，问我是不是三组的某某？他就是为了证实一下。 一看名字，我一...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1441586-687974eef07d608f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        {
            id: 2,
            title: '新青年分享会|旅行试睡师教你，如何边玩边赚，把旅行变得有趣',
            desc: '我是简书新青年，简书作者会玩Toly, 98少年，旅行摄影师，旅行体验师，写字的人。 19岁，是一名大多数时间都在路上的旅行试睡师，也在简书记录...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1276176-26c9b0f865ea77fe.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        {
            id: 3,
            title: '新青年分享会|旅行试睡师教你，如何边玩边赚，把旅行变得有趣',
            desc: '我是简书新青年，简书作者会玩Toly, 98少年，旅行摄影师，旅行体验师，写字的人。 19岁，是一名大多数时间都在路上的旅行试睡师，也在简书记录...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1276176-26c9b0f865ea77fe.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        }
    ]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}