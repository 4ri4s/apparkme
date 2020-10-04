import React, { useState } from 'react';
import ParkingLotsContext, {ParkingLotsContextModel, Park, ParkType} from './parking-context'; 


const ParkingLotsContextProvider: React.FC = (props) => {

    const [parkingLots, setParkingLots] = useState<Park[]>(
        [
            {
                id: Math.random().toString(),
                address: "",
                city: "",
                country: "",
                parkType: "seg-b",
                isAvaible: false,
                x: "",
                y: ""
            }
        ]
    )

    const addPark = (address: string, city: string, country: string, isAvaible: boolean, parkType: ParkType, y: string, x: string) => {
        const newPark: Park = {
                id: Math.random().toString(),
                address,
                city,
                country,
                parkType,
                isAvaible,
                x: "",
                y: ""
        };

        setParkingLots(currParkingLots =>{
            return [... currParkingLots, newPark];
        });
    };
    const enablePark = (parkId: string) => {
        setParkingLots(currParkingLots => {
            const updatedParkingLots = [...currActivities];
            const selectedParkingLots = parkingLots.findIndex(park => park.id === parkId);
            
        })
    }


    const parkingLotsContext: ParkingLotsContextModel = {

    };

    return (
        <ParkingLotsContext.Provider value={}>
            {props.children}
        </ParkingLotsContext.Provider>
    );

};