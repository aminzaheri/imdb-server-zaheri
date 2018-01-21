/**
 * Created by Mine on 6/9/2016.
 */
'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
const Promisify = require("../../util/Promisify");
const ErrorCodes = require("../../util/ErrorCodes");
const  TimeHelper = require('../../util/TimeHelper');
var SlideShow = Backtory.Object.extend('SlideShow',{
    getId(){return this.get(SlideShow.Col.Id)},
    getImage1(){return this.get(SlideShow.Col.Image1)},
    getImage2(){return this.get(SlideShow.Col.Image2)},
    getImage3(){return this.get(SlideShow.Col.Image3)},
    getImage4(){return this.get(SlideShow.Col.Image4)},
    getCreationDate(){return this.get(SlideShow.Col.CreationDate)},

    setId(value){this.set(SlideShow.Col.Id, value)},
    setImage1(value){this.set(SlideShow.Col.Image1, value)},
    setImage2(value){this.set(SlideShow.Col.Image2, value)},
    setImage3(value){this.set(SlideShow.Col.Image3, value)},
    setImage4(value){this.set(SlideShow.Col.Image4, value)},
},{
    get Name(){return 'SlideShow'},
});
SlideShow.Col = {
    get Id(){return '_id'},
    get Image1(){return 'image1'},
    get Image2(){return 'image2'},
    get Image3(){return 'image3'},
    get Image4(){return 'image4'},
    get CreationDate(){return 'createdAt'},

};

Backtory.Object.registerSubclass(SlideShow.Name, SlideShow);
module.exports = SlideShow;