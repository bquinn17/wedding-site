import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const getIsTouch = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

export const WEDDING_LOCATION = {
  id: 'wedding',
  name: 'Snow Farm Vineyard & Distillery',
  subtitle: 'Wedding · Sat Sept 19',
  address: '190 W Shore Rd, South Hero, VT 05486',
  coords: [44.626801, -73.333023],
  mapsUrl: 'https://maps.app.goo.gl/95xrgDQWuF7CPMqY8',
  emoji: '\u{1F48D}',
  color: '#b5651d',
};

export const WELCOME_LOCATION = {
  id: 'welcome',
  name: 'Foam Brewers',
  subtitle: 'Welcome Party · Fri Sept 18',
  address: '112 Lake St, Burlington, VT 05401',
  coords: [44.47725, -73.22074],
  mapsUrl: 'https://maps.app.goo.gl/tGgvTSm8D7wynTsC7',
  emoji: '\u{1F37B}',
  color: '#c98a4b',
};

export const HOTEL_LOCATION = {
  id: 'hotel',
  name: 'Hampton Inn & Suites Colchester',
  subtitle: 'Room Block',
  address: '42 Lower Mountain View Dr, Colchester, VT 05446',
  coords: [44.54373, -73.15152],
  mapsUrl: 'https://maps.app.goo.gl/zRAyCyxL5dzZguwk8',
  emoji: '\u{1F6CF}\u{FE0F}',
  color: '#5d4a37',
};

export const AIRPORT_LOCATION = {
  id: 'airport',
  name: 'Burlington International Airport',
  subtitle: 'BTV',
  address: '1200 Airport Dr, South Burlington, VT 05403',
  coords: [44.47194, -73.15328],
  mapsUrl: 'https://maps.app.goo.gl/NYCNPHJgmJBaetze9',
  emoji: '\u{2708}\u{FE0F}',
  color: '#8b7355',
};

const LOCATIONS = [
  WEDDING_LOCATION,
  WELCOME_LOCATION,
  HOTEL_LOCATION,
  AIRPORT_LOCATION,
];

function makeIcon({ emoji, color }) {
  const html = `
    <div class="map-pin" style="--pin-color:${color}">
      <div class="map-pin-bubble">
        <span class="map-pin-emoji">${emoji}</span>
      </div>
      <div class="map-pin-tail"></div>
    </div>
  `;
  return L.divIcon({
    html,
    className: 'map-pin-wrapper',
    iconSize: [40, 52],
    iconAnchor: [20, 50],
    popupAnchor: [0, -46],
  });
}

function LocationsMap() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const mapRef = useRef(null);
  const [isTouch] = useState(getIsTouch);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      zoomControl: true,
      dragging: !isTouch,
    });
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const bounds = L.latLngBounds(LOCATIONS.map((l) => l.coords));

    LOCATIONS.forEach((loc) => {
      const marker = L.marker(loc.coords, { icon: makeIcon(loc) }).addTo(map);
      marker.bindPopup(`
        <div class="map-popup">
          <strong>${loc.name}</strong>
          <div class="map-popup-sub">${loc.subtitle}</div>
          <div class="map-popup-addr">${loc.address}</div>
          <a href="${loc.mapsUrl}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
        </div>
      `);
    });

    map.fitBounds(bounds, { padding: [50, 50] });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [isTouch]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isTouch) return;
    if (active) {
      map.dragging.enable();
    } else {
      map.dragging.disable();
    }
  }, [active, isTouch]);

  useEffect(() => {
    if (!active) return;
    const handlePointerDown = (e) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [active]);

  return (
    <div ref={wrapperRef} className="locations-map-wrapper fade-in-up">
      <div ref={containerRef} className="locations-map" />
      {isTouch && !active && (
        <button
          type="button"
          className="locations-map-overlay"
          onClick={() => setActive(true)}
          aria-label="Activate map interaction"
        >
          <span>Tap to interact with map</span>
        </button>
      )}
    </div>
  );
}

export default LocationsMap;
