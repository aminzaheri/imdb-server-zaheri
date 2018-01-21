
/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const ArrayField = require("../../requestDataHandler/dataTypes/ArrayField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function editSlideShowRequest(){
    this.init.apply(this, arguments);
}

editSlideShowRequest.prototype = Object.create(ValidatableObject.prototype);

editSlideShowRequest.prototype.init = function(){
    this.id = new StringField(true);
    this.image1 = new StringField(true);
    this.image2 = new StringField(true);
    this.image3 = new StringField(true);
    this.image4 = new StringField(true);
    ValidatableObject.prototype.init.apply(this, arguments);
};

editSlideShowRequest.prototype._name = function(){
    return "editSlideShowRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = editSlideShowRequest;