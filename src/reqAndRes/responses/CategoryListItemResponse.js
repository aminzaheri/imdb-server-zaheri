/**
 * Created by hamid on 1/27/17.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const BooleanField = require("../../requestDataHandler/dataTypes/BooleanField");
const NumberField = require("../../requestDataHandler/dataTypes/NumberField");
const IntegerField = require("../../requestDataHandler/dataTypes/IntegerField");
//const UserInfoResponse = require("./user/UserInfoResponse");

const BaseObject = require("../../requestDataHandler/BaseObject");

function CategoryListItemResponse(){
    this.init.apply(this, arguments);
}

CategoryListItemResponse.prototype = Object.create(BaseObject.prototype);

CategoryListItemResponse.prototype.init = function(){
    this.id = new StringField();
    this.categoryName = new StringField();
    this.releaseDate = new StringField();
    this.count = new NumberField();    
    BaseObject.prototype.init.apply(this, arguments);
};

CategoryListItemResponse.prototype.initFromData = function(category){
    if(!category){
        return;
    }
    let data = {
        id: category.getId(),
        categoryName: category.getCategoryName(),
        count: category.getCount(),
        releaseDate: category.getReleaseDate(),        
    };
    this.init(data);
};

CategoryListItemResponse.prototype._name = function(){
    return "CategoryListItemResponse";
};

/**
 * @Response("MovieListItemResponse")
 * @Component()
 */
module.exports = CategoryListItemResponse;