import type {Bank} from "../../../../../models/IUserDummy.ts";
import type {FC} from "react";

export const UserBank:FC<{bank:Bank}> = ({bank}) => {
    return (
        <div>
            <h4>Bank</h4>
            <p>Card Number: {bank.cardNumber}</p>
            <p>Card Type: {bank.cardType}</p>
            <p>Currency: {bank.currency}</p>
        </div>
    );
};