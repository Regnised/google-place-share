import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM.js';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

form.addEventListener('submit', searchAddressHandler);

// declare var ol: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const coordinates = { lat: 1.41, lng: -3.99 }; // Can't fetch coordinates from Google API, use dummy ones

  document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
  new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: [coordinates.lng, coordinates.lat],
      zoom: 2,
    }),
  });
}
