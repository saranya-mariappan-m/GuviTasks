/**
 * Task to calculate UBER Price.
 */

class Uber{
    constructor(startLatitude,startLongitude,endLatitude,endLongitude,seat){
        this.startLatitude = startLatitude;
        this.startLongitude = startLongitude;
        this.endLatitude = endLatitude;
        this.endLongitude = endLongitude;
        this.seat = seat;
    }
    calculatePrice(){
        const xhr = new XMLHttpRequest();
const tripURL = 'https://api.uber.com/v1.2/estimates/price?start_latitude=this.startLatitude&start_longitude=this.startLongitude&end_latitude=this.endLatitude&end_longitude=this.endLongitude';
xhr.open('GET', tripURL);

xhr.onload = function () {
  const estimatedPrice = JSON.parse(xhr.responseText);
  console.log(estimatedPrice);

}

xhr.send()

    }
}
const uberObj = new Uber('12.9249308','79.9475673','13.0417591',',80.0816408');
uberObj.calculatePrice();