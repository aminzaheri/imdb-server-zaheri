/**
 * Created by hamid on 1/27/17.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const BooleanField = require("../../requestDataHandler/dataTypes/BooleanField");
const NumberField = require("../../requestDataHandler/dataTypes/NumberField");
const IntegerField = require("../../requestDataHandler/dataTypes/IntegerField");
//const SlideShowResponse = require("./SlideShowResponse");

const BaseObject = require("../../requestDataHandler/BaseObject");

function SlideShowResponse(){
    this.init.apply(this, arguments);
}

SlideShowResponse.prototype = Object.create(BaseObject.prototype);

SlideShowResponse.prototype.init = function(){
    this.id = new StringField();
    this.releaseDate = new StringField();
    this.image1 = new StringField();    
    this.image2 = new StringField();
    this.image3 = new StringField();
    this.image4 = new StringField();    
    BaseObject.prototype.init.apply(this, arguments);
};

SlideShowResponse.prototype.initFromData = function(slideShow){
    if(!slideShow){
        return;
    }
    let data = {
        id: slideShow.getId(),        
        releaseDate: slideShow.getCreationDate(),
        image1: slideShow.getImage1(),
        image2: slideShow.getImage2(),
        image3: slideShow.getImage3(),
        image4: slideShow.getImage4(),        
    };
    this.init(data);
};

SlideShowResponse.prototype._name = function(){
    return "SlideShowResponse";
};

/**
 * @Response("SlideShowResponse")
 * @Component()
 */
module.exports = SlideShowResponse;