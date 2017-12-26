/**
 * Created by hamid on 1/27/17.
 */
'use strict';
const StringField = require("../../requestDataHandler/dataTypes/StringField");
const BooleanField = require("../../requestDataHandler/dataTypes/BooleanField");
const IdField = require("../../requestDataHandler/dataTypes/IdField");
const ArrayField = require("../../requestDataHandler/dataTypes/ArrayField");
const IntegerField = require("../../requestDataHandler/dataTypes/IntegerField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");
const CategoryListItemResponse = require("./CategoryListItemResponse");

const FailedSuccessResponses = require("./general/FailedSuccessResponse");

function CategoryListItemResponseList(){
    this.init.apply(this, arguments);
}

CategoryListItemResponseList.prototype = Object.create(FailedSuccessResponses.prototype);

CategoryListItemResponseList.prototype.init = function(){
    this.categories = new ArrayField(CategoryListItemResponse);
    FailedSuccessResponses.prototype.init.apply(this, arguments);
};


CategoryListItemResponseList.prototype._name = function(){
    return "CategoryListItemResponseList";
};

/**
 * @Response("MovieListItemResponseList")
 * @Component()
 */
module.exports = CategoryListItemResponseList;