class StorageLoc {
    constructor() {
        this.city;
        this.country;
        this.defaultCity = 'Amman';
        this.defaultCountry = 'jordan';
    }
    getLocationStorage() {
        //if there is nothing in the local storage
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
            //if there is an input in the local storage
        }
        else {
            this.city = localStorage.getItem('city');
        }
        if (localStorage.getItem('country') === null) {
            this.country = this.defaultCountry;
        }
        else {
            this.country = localStorage.getItem('country');
        }

        return {
            city: this.city,
            country: this.country
        }
    }
    setLocationStorage(city, country) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
}