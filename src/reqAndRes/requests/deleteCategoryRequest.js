
/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const ArrayField = require("../../requestDataHandler/dataTypes/ArrayField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function deleteCategoryRequest(){
    this.init.apply(this, arguments);
}

deleteCategoryRequest.prototype = Object.create(ValidatableObject.prototype);

deleteCategoryRequest.prototype.init = function(){
    this.id = new StringField(true);    
    ValidatableObject.prototype.init.apply(this, arguments);
};

deleteCategoryRequest.prototype._name = function(){
    return "deleteCategoryRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = deleteCategoryRequest;