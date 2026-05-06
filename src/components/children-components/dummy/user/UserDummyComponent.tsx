import type {FC} from "react";
import type {IUserDummy} from "../../../../models/IUserDummy.ts";
import "./UserDummyComponent.css"

import {UserMainInfo} from "./components-of-user/UserMainInfo.tsx";
import {UserDetails} from "./components-of-user/UserDetails.tsx";
import {UserContacts} from "./components-of-user/UserContacts.tsx";
import {UserAddress} from "./components-of-user/UserAddress.tsx";
import {UserBank} from "./components-of-user/UserBank.tsx";
import {UserCompany} from "./components-of-user/UserCompany.tsx";
import {UserCrypto} from "./components-of-user/UserCrypto.tsx";

type Props = { item: IUserDummy };

export const UserDummyComponent: FC<Props> = ({item}) => {
    return (
        <section className="wrapper">
            <UserMainInfo user={item}/>
            <UserContacts user={item}/>
            <UserDetails user={item}/>
            <UserAddress address={item.address}/>
            <UserBank bank={item.bank}/>
            <UserCompany company={item.company}/>
            <UserCrypto crypto={item.crypto}/>
        </section>
    );
};