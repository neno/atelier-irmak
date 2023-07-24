'use client'

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";


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
        "color": "#7b7a93"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#7b7a93"
      }
    ]
  }
]

export const Map = ({ address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then((google) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 17,
            styles,
          });

          const marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    });
  }, [address]);

  return <div className='h-full' ref={mapRef} />;
};
