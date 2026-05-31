export interface IUserWithTokens {//тип юзера, з яким працюємо
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    accessToken: string
    refreshToken: string
}
