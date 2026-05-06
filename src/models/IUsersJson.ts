export interface IUsersJson {
    id: number
    name: string
    username: string
    email: string
    address: IUsersAddress
    phone: string
    website: string
    company: IUsersCompany
}

interface IUsersAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: IUsersGeo
}

interface IUsersGeo {
    lat: string
    lng: string
}

interface IUsersCompany {
    name: string
    catchPhrase: string
    bs: string
}
