
import React from 'react';

export type ParkType = 'seg-b' | 'seg-a' | 'seg-c';

export interface Park {
    id: string;
    address: string;
    city: string;
    country: string;
    parkType: ParkType;
    isAvaible: boolean;
    x: string;
    y: string;
}

export interface ParkingLotsContextModel {
    parkingLots: Park [],
    addPark: (address: string, city: string, country: string, parkType: ParkType) => void,
    enablePark: (parkId: string) => void;
}

const ActivitiesContext = React.createContext<ParkingLotsContextModel>({
    parkingLots: [],
    addPark: () => {},
    enablePark: ()=>{}
})

export default ActivitiesContext;