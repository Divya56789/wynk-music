class playlist {
    constructor(sngImg , sngName , artName ,sngUrl){
        this.sngImg = sngImg;
        this.sngName = sngName;
        this.artName = artName;
        this.sngUrl = sngUrl;
    }

    get sngImg() {
        return this._sngImg;
    }
    set sngImg(sngImg) {
        this._sngImg = sngImg;
    }
    get sngName() {
        return this._sngName;
    }
    set sngName(sngName) {
        this._sngName = sngName;
    }
    get artName() {
        return this._artName;
    }
    set artName(artName) {
        this._artName = artName;
    }
    get sngUrl() {
        return this._sngUrl;
    }
    set sngUrl(sngUrl) {
        this._sngUrl = sngUrl;
    }
};

