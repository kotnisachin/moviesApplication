const types = {
    INC_LOADING_COUNT: "INC_LOADING_COUNT",
    DEC_LOADING_COUNT: "DEC_LOADING_COUNT"
}

export function INC_LOADIND() {
    return {
        type: types.INC_LOADING_COUNT,
    }
}

export function DEC_LOADIND() {
    return {
        type: types.DEC_LOADING_COUNT,
    }
}

export default types;