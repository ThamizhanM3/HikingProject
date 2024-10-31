import React from 'react'
import '../css/Content.css'
import LeftAligned from './LeftAligned'
import RightAligned from './RightAligned'
import image01 from '../assets/Images/Image01.png'
import image02 from '../assets/Images/Image02.png'
import image03 from '../assets/Images/Image03.png'

const arr = [
    {
        number: '01',
        top: 'GET STARTED',
        heading: 'What level of hiker are you?',
        content: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you - novice, moderate, advanced moderate, expert, or expert backpacker?',
        image: image01
    },
    {
        number: '02',
        top: 'HIKING ESSENTIALS',
        heading: 'Picking the right Hiking Gear!',
        content: 'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.',
        image: image02
    },
    {
        number: '03',
        top: 'WHERE YOU GO IS THE KEY',
        heading: 'Understand Your Map & Timing',
        content: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..',
        image: image03
    },
    {
        number: '01',
        top: 'GET STARTED',
        heading: 'What level of hiker are you?',
        content: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you - novice, moderate, advanced moderate, expert, or expert backpacker?',
        image: image01
    },
    {
        number: '02',
        top: 'HIKING ESSENTIALS',
        heading: 'Picking the right Hiking Gear!',
        content: 'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.',
        image: image02
    },
    {
        number: '03',
        top: 'WHERE YOU GO IS THE KEY',
        heading: 'Understand Your Map & Timing',
        content: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..',
        image: image03
    },
    {
        number: '01',
        top: 'GET STARTED',
        heading: 'What level of hiker are you?',
        content: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you - novice, moderate, advanced moderate, expert, or expert backpacker?',
        image: image01
    },
    {
        number: '02',
        top: 'HIKING ESSENTIALS',
        heading: 'Picking the right Hiking Gear!',
        content: 'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.',
        image: image02
    },
    {
        number: '03',
        top: 'WHERE YOU GO IS THE KEY',
        heading: 'Understand Your Map & Timing',
        content: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..',
        image: image03
    },

]

const Content = () => {
    return (
        <div className='Content'>
            {
                arr.map(cont => {
                    if (arr.indexOf(cont) % 2 == 0) {
                        return (
                            <LeftAligned
                                number={cont.number}
                                top={cont.top}
                                heading={cont.heading}
                                content={cont.content}
                                image={cont.image}
                            />
                        )
                    } else {
                        return (
                            <RightAligned
                                number={cont.number}
                                top={cont.top}
                                heading={cont.heading}
                                content={cont.content}
                                image={cont.image}
                            />
                        )
                    }
                })
            }
        </div>
    )
}

export default Content