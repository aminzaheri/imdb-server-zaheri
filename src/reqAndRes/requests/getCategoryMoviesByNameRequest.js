/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const IntegerField = require("../../requestDataHandler/dataTypes/IntegerField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function getCategoryMoviesByNameRequest(){
    this.init.apply(this, arguments);
}

getCategoryMoviesByNameRequest.prototype = Object.create(ValidatableObject.prototype);

getCategoryMoviesByNameRequest.prototype.init = function(){
    this.categoryName = new StringField(true);
    this.skip = new IntegerField();
    this.limit = new IntegerField();
    ValidatableObject.prototype.init.apply(this, arguments);
};

getCategoryMoviesByNameRequest.prototype._name = function(){
    return "getCategoryMoviesByNameRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = getCategoryMoviesByNameRequest;