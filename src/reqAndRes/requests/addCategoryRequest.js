
/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const ArrayField = require("../../requestDataHandler/dataTypes/ArrayField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function addCategoryRequest(){
    this.init.apply(this, arguments);
}

addCategoryRequest.prototype = Object.create(ValidatableObject.prototype);

addCategoryRequest.prototype.init = function(){
    this.categoryName = new StringField(true);    
    ValidatableObject.prototype.init.apply(this, arguments);
};

addCategoryRequest.prototype._name = function(){
    return "addCategoryRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = addCategoryRequest;