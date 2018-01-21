/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const IntegerField = require("../../requestDataHandler/dataTypes/IntegerField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function getSlideShowRequest(){
    this.init.apply(this, arguments);
}

getSlideShowRequest.prototype = Object.create(ValidatableObject.prototype);

getSlideShowRequest.prototype.init = function(){
    this.id = new StringField(true);    
    ValidatableObject.prototype.init.apply(this, arguments);
};

getSlideShowRequest.prototype._name = function(){
    return "getSlideShowRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = getSlideShowRequest;