class MarkerLiveEvent {
    constructor(nom_du_shop, lat, lng, description, boolOpen){
        this.nom_du_shop = nom_du_shop;
        this.lat = lat;
        this.lng = lng;
        this.position = { lat, lng};
        this.description = description;
        this.open = boolOpen;
    }
    toggleOpen(){
        this.open = !this.open
    }
}

export default MarkerLiveEvent;

