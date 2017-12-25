
/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const ArrayField = require("../../requestDataHandler/dataTypes/ArrayField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function addMovieRequest(){
    this.init.apply(this, arguments);
}

addMovieRequest.prototype = Object.create(ValidatableObject.prototype);

addMovieRequest.prototype.init = function(){
    this.name = new StringField(true);
    this.director = new StringField(true);
    this.production = new StringField(true);
    this.writer = new StringField(true);
    this.actors = new ArrayField(true);
    this.country = new StringField(true);
    this.genre = new StringField(true);
    this.box_office = new StringField(true);
    this.runtime = new StringField(true);
    this.date = new StringField(true);
    this.comment = new StringField(true);
    this.image = new StringField(true);
    ValidatableObject.prototype.init.apply(this, arguments);
};

addMovieRequest.prototype._name = function(){
    return "addMovieRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = addMovieRequest;