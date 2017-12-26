/**
 * Created by Mine on 6/9/2016.
 */
'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
const Promisify = require("../../util/Promisify");
const ErrorCodes = require("../../util/ErrorCodes");
const  TimeHelper = require('../../util/TimeHelper');
var Category = Backtory.Object.extend('Category',{
    getId(){return this.get(Category.Col.Id)},
    getCategoryName(){return this.get(Category.Col.CategoryName)},
    getCount(){return this.get(Category.Col.Count)},    
    getReleaseDate(){return this.get(Category.Col.ReleaseDate)},

    setId(value){this.set(Category.Col.Id, value)},
    setCategoryName(value){this.set(Category.Col.CategoryName, value)},
    setCount(value){this.set(Category.Col.Count ,value)},   
    setReleaseDate(value){this.set(Category.Col.ReleaseDate, value)}, 
},{
    get Name(){return 'Category'},
});
Category.Col = {
    get Id(){return '_id'},
    get CategoryName(){return 'categoryName'},
    get Count(){return 'Count'},
    get CreationDate(){return 'createdAt'},
    get ReleaseDate(){return 'releaseDate'},
};

Backtory.Object.registerSubclass(Category.Name, Category);
module.exports = Category;