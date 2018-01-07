
/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const ArrayField = require("../../requestDataHandler/dataTypes/ArrayField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function editCategoryRequest(){
    this.init.apply(this, arguments);
}

editCategoryRequest.prototype = Object.create(ValidatableObject.prototype);

editCategoryRequest.prototype.init = function(){
    this.id = new StringField(true);
    this.categoryName = new StringField(true);    
    ValidatableObject.prototype.init.apply(this, arguments);
};

editCategoryRequest.prototype._name = function(){
    return "editCategoryRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = editCategoryRequest;