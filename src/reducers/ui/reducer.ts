import { IUIState } from "../types"
import { IUIActions, TOGGLE_ADD_CATEGORY_MODAL } from "./types"

const initialState: IUIState = {
  showAddCategoryModal: false
}

const uiReducer = (state: IUIState = initialState, action: IUIActions) => {
  switch (action.type) {
    case TOGGLE_ADD_CATEGORY_MODAL:
      return {...state, showAddCategoryModal: !state.showAddCategoryModal}
    default:
      return {...state}
  }
}

export default uiReducer;