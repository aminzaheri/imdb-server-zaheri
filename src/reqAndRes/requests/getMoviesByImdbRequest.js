/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const IntegerField = require("../../requestDataHandler/dataTypes/IntegerField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function getMoviesByImdbRequest(){
    this.init.apply(this, arguments);
}

getMoviesByImdbRequest.prototype = Object.create(ValidatableObject.prototype);

getMoviesByImdbRequest.prototype.init = function(){
    this.imdb = new StringField(true);
    this.skip = new IntegerField();
    this.limit = new IntegerField();
    ValidatableObject.prototype.init.apply(this, arguments);
};

getMoviesByImdbRequest.prototype._name = function(){
    return "getMoviesByImdbRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = getMoviesByImdbRequest;