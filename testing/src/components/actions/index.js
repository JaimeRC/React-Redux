import { SAVE_COMMENT } from "actions/types"

export function saveComment(comment) {
    return {
        types: SAVE_COMMENT,
        payload: comment
    }
}