
export interface Iproduct{
     pname: string;
    pid: string;
    pstatus: string;
    canReturn: number;
}

export interface IresProduct<T>{
    msg:string;
    data:T
}