'use client'

import {FC, useEffect, useRef} from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapProps {
  address: string;
}

interface GeocoderResult {
  geometry: {
    location: google.maps.LatLng;
  };
}

const styles = [
  {
    "featureType": "all",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "hue": "#0003ff"
      },
      {
        "gamma": "1.53"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "gamma": "1.0"
      },
      {
        "saturation": "-100"
      },
      {
        "lightness": "5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

export const Map: FC<MapProps> = ({ address }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
    });

    loader.load().then((google) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results: GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results) {
            const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
              center: results[0].geometry.location,
              zoom: 17,
              styles,
            });

            const svgMarker = {
              path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
              fillColor: '#12184d',
              fillOpacity: 1,
              anchor: new google.maps.Point(0, 20),
              strokeWeight: 0,
              scale: 2,
            };

            new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              icon: svgMarker,
            });
          }
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    });
  }, [address]);

  return <div className='h-full' ref={mapRef} />;
};