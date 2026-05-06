import type {Address} from "../../../../../models/IUserDummy.ts";
import type {FC} from "react";

export const UserAddress:FC<{address:Address}> = ({address}) => {
    return (
        <div>
            <h4>Address</h4>
            <p>Country: {address.country}</p>
            <p>City: {address.city}</p>
            <p>Address: {address.address}</p>
            <p>State: {address.state}</p>
            <p>Postal Code: {address.postalCode}</p>
        </div>
    );
};