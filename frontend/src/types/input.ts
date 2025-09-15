export interface InputProps{
    labelText?:string;
    inputId:string;
    type?:string;
    placeholderText?:string;
    onChange:(value:string)=>void;
    name:string;

}