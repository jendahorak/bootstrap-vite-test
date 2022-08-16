// Import our custom CSS
import '../scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

mapboxgl.accessToken = 'pk.eyJ1IjoiamVuZGEtaG9yYWsiLCJhIjoiY2w2d2Q0YjBnMDR3ejNqcW00MzV1dmw3aSJ9.ID6JPzc9f783qKn2j9mHfg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [14.21478, 50.78215],
  zoom: 15,
});
