
export const COL_INC="COL_INC";
export const SET_COL_SIZE="SET_COL_SIZE";
export const SET_ROW_SIZE="SET_ROW_SIZE";

export function colInc(size){
    return {
        type: COL_INC,
        payload: size++
    }
}

export function setCol(size){
    return{
        type:SET_COL_SIZE,
        payload: Number(size)
    }
}

export function setRow(size){
    return{
        type:SET_ROW_SIZE,
        payload: Number(size)
    }
}