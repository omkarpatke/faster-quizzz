export type Questions = {
    Ques:string
    ans:string
    option: string[]
}

export type Action =
   | {
        type: 'QUESTIONS'
        payload: Questions[]
    }

    | {
        type: 'UPDATE_SCORE'
        payload: Questions[]
        score:number
    }

    | {
        type: 'USER_ANSWERS'
        userAnswers:string[]
    }

export type ChildrenType = {
    children: React.ReactNode
}

export type IntialState = {
    payload: [] | Questions[]
    score: number
    type: string
    userAnswers: [] | string[]
}

export type ObjectType = {
    type:string 
} 
