import React from 'react';
import Timeline from './Timeline';

const events = [
  {
    date: 'August 12, 2019',
    title: 'Started Working at Clarifai',
    type: 'work',
    keywords: ['JavaScript', 'ReactJS', 'Redux'],
    description:
      'Currently working as a Full Stack developer at Clarifai.',
    images: [],
  },
  {
    date: 'December 19, 2017',
    title: 'Married!',
    description: 'We had a wedding with a Christmas theme. It even snowed!',
    images: [],
  },
  {
    date: 'January 07, 2017',
    title: 'Adopted a cat',
    description: 'We adopted a new furry little guy. His name is Stefan!',
    images: [],
  },
  {
    date: 'December 25, 2016',
    title: 'Engaged!',
    description: [
      'I propsed to my girlfriend on Christmas Day.',
      'You can probably tell we enjoy this time of year.',
    ],
    images: [],
  },
  {
    date: 'May 23, 2016',
    title: 'Started working at Pefin',
    type: 'work',
    keywords: ['JavaScript', 'ReactJS', 'Redux', 'KnockoutJS'],
    description:
      'Worked as a Front End Developer at Pefin, an NYC based start-up. We used a combination of Knockout and React components to display financial projections.',
    images: [],
  },
  {
    date: 'September 15, 2014',
    title: 'Started working at Niksun',
    type: 'work',
    keywords: ['JavaScript', 'ReactJS', 'AngularJS (v1)', 'SmartGWT', 'Java'],
    description: [
      'Worked as a junior software engineer at Niksun, a network monitoring and security company. I developed components to display network data in various different kinds of charts, graphs, and tables.',
      'Initially we started building a new web based UI for the Java based front-end app. Eventually the project took on a new life as a full JavaScript project using Angular. Later we also started integrating React components to improve performance.',
    ],
    images: [],
  },
  {
    date: 'Spring 2013',
    type: 'work',
    keywords: ['Bachelor of Science', 'Computer Science'],
    title: 'Graduated from Rutgers University New Brunswick',
    description: 'Recieved a Bachelor of Science in Computer Science',
    images: [],
  },
];

const HistoryPage = () => <Timeline events={events} />;

HistoryPage.propTypes = {};

export default HistoryPage;
