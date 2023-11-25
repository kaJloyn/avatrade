import { UserPayload } from "@/store/modules/auth"

export class AuthService {

    static login(user: UserPayload): Promise<{  email: string, id: string, } | string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Object.prototype.hasOwnProperty.call(user, 'email')) {
                    const fakeResponse = {
                        email: user.email,
                        id: 'b66b5cca-46ba-4018-8637-af1465e38a17',

                    }
                    resolve(fakeResponse)
                    window.localStorage.setItem('current_user', JSON.stringify(fakeResponse))

                } else {
                    reject('Login failed: missing username')
                }
            }, 100)
        })
    }
}