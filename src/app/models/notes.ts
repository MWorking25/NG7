export interface Notes {
    note:string,
    url:string,
    files:Array<any>,
    createddate:Date,
    createdby:string,
    lables:Array<any>,
    todos:[TODO],
    comments:[userComments]
}

export interface TODO {
    item:string,
    completed:string,
    completeddate:Date,
    createddate:Date
}

export interface userComments {
    comment:string,
    createdby:string,
    createddate:string,
}