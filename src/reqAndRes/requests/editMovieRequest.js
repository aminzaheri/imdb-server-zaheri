
/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const ArrayField = require("../../requestDataHandler/dataTypes/ArrayField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");

function editMovieRequest(){
    this.init.apply(this, arguments);
}

editMovieRequest.prototype = Object.create(ValidatableObject.prototype);

editMovieRequest.prototype.init = function(){
    this.id = new StringField(true);
    this.name = new StringField(true);
    this.director = new StringField(true);
    this.production = new StringField(true);
    this.writer = new StringField(true);
    this.actors = new StringField(true);
    this.country = new StringField(true);
    this.genre = new StringField(true);
    this.box_office = new StringField(true);
    this.runtime = new StringField(true);
    this.date = new StringField(true);
    this.link1 = new StringField(true);
    this.link2 = new StringField(true);
    this.link3 = new StringField(true);
    this.subtitle = new StringField(true);
    this.imdb = new StringField(true);
    this.comment = new StringField(true);
    this.image = new StringField(true);
    ValidatableObject.prototype.init.apply(this, arguments);
};

editMovieRequest.prototype._name = function(){
    return "editMovieRequest";
};

/**
 * @Request("RegisterUserRequest")
 */
module.exports = editMovieRequest;