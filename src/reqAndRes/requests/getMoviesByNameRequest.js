/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const IntegerField = require("../../requestDataHandler/dataTypes/IntegerField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function getMoviesByNameRequest(){
    this.init.apply(this, arguments);
}

getMoviesByNameRequest.prototype = Object.create(ValidatableObject.prototype);

getMoviesByNameRequest.prototype.init = function(){
    this.name = new StringField(true);
    this.skip = new IntegerField();
    this.limit = new IntegerField();
    ValidatableObject.prototype.init.apply(this, arguments);
};

getMoviesByNameRequest.prototype._name = function(){
    return "getMoviesByNameRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = getMoviesByNameRequest;