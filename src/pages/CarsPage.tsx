import {useEffect, useState} from "react";
import type {ICar} from "../models/ICar.ts";
import {getCars} from "../services/api.service.ts";

export const CarsPage = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getCars().then((cars) => {
            setCars(cars);
        })
    }, []);
    return (
        <>
            {cars.map((car) => (<div key={car.id}>{car.id}-{car.brand}</div>))}
        </>
    );
};