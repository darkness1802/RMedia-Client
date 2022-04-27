import { atom } from 'recoil';

export var trackList = atom({
    key: 'trackList',
    default: []
}) 

export var currentIndex = atom({
    key: 'currentIndex',
    default: 0
})

export var queue = atom({
    key: 'queue',
    default: []
})

export var playingTrack = atom({
    key: 'playingTrack',
    default: null
})

export var trackListInfo = atom({
    key: 'trackListInfo',
    default: []
})