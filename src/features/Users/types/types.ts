export interface DefaultResponse<T> {
    data: T
    support: {
        url: string
        text: string
    }
}

export interface ItemsResponse<T> extends DefaultResponse<T> {
    page: number
    per_page: number
    total_pages: number
}

export interface User {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}