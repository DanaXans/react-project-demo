import type {FC} from "react";
import type {Crypto} from "../../../../../models/IUserDummy.ts";

export const UserCrypto: FC<{crypto:Crypto}> = ({crypto}) => {
    return (
        <div>
            <h4>Crypto</h4>
            <p>Coin: {crypto.coin}</p>
            <p>Wallet: {crypto.wallet}</p>
            <p>Network: {crypto.network}</p>
        </div>
    );
};