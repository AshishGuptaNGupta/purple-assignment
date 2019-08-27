
export const ADD_ELEMENT="ADD_ELEMENT";
export const DELETE_ELEMENT="DELETE_ELEMENT";
export const GET_ELEMENTS="GET_ELEMENTS";

export function getElements(element,name,style){
    var newElement={
        type:element,
        name:name,
        style:style
    }
    return {
        type: ADD_ELEMENT,
        payload: newElement
    }
}

export function addElement(element,name,style){
    var newElement={
        type:element,
        name:name,
        style:style
    }
    return {
        type: ADD_ELEMENT,
        payload: newElement
    }
}

export function removeElement(size){
   
    return{
        type:GET_ELEMENTS,
        payload: Number(size)
    }
}