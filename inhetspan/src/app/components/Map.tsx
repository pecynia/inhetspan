"use client"

import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function Map() {

    const mapRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                version: "quarterly",
            })
            const { Map } = await loader.importLibrary('maps')
            const { Marker } = await loader.importLibrary('marker')
            const position = {
                lat: 52.0002035749687, 
                lng: 5.94389426128044,
            }
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'HETSPAN_MAPID',
            }
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
            const marker = new Marker({
                position,
                map,
                title: 'Het Span',
            })
        }

        initMap()
    }, [])

    return (
        <div className='w-full h-full' ref={mapRef}></div>    
    )
}