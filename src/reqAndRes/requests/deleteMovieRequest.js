
/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const ArrayField = require("../../requestDataHandler/dataTypes/ArrayField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function deleteMovieRequest(){
    this.init.apply(this, arguments);
}

deleteMovieRequest.prototype = Object.create(ValidatableObject.prototype);

deleteMovieRequest.prototype.init = function(){
    this.id = new StringField(true);    
    ValidatableObject.prototype.init.apply(this, arguments);
};

deleteMovieRequest.prototype._name = function(){
    return "deleteMovieRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = deleteMovieRequest;