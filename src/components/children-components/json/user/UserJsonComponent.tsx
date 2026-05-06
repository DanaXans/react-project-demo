import type {FC} from "react";
import type {IUsersJson} from "../../../../models/IUsersJson.ts";
import "./UserJsonComponent.css"

type Props = { item: IUsersJson };
export const UserJsonComponent: FC<Props> = ({item}) => {
    return (
        <>
            <section>
                <div className='nameWrapper'>
                    <h2>{item.name}</h2>
                </div>
                <main>
                    <h3>Information:</h3>
                    <p>id: {item.id}</p>
                    <p>Name: {item.username}</p>
                    <p>Email: {item.email}</p>
                    <p>Phone number: {item.phone}</p>
                    <p>Website: {item.website}</p>
                </main>
                <div className='address'>
                    <p>Address:</p>
                    <p>City: {item.address.city}</p>
                    <p>Street: {item.address.street}</p>
                    <p>Suite: {item.address.suite}</p>
                    <p>Zipcode: {item.address.zipcode}</p>
                </div>
                <div className='geo'>
                    <p>Geo:</p>
                    <p>lat: {item.address.geo.lat}</p>
                    <p>lng: {item.address.geo.lng}</p>
                </div>
                <div className='company'>
                    <p>Company:</p>
                    <p>{item.company.name}</p>
                    <p>Catchphrase{item.company.catchPhrase}</p>
                    <p>bs: {item.company.bs}</p>
                </div>
            </section>
        </>
    );
};