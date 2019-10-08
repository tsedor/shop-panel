import { TOGGLE_ADD_CATEGORY_MODAL, IUIActions } from './types';

export function toggleAddCategoryModal(): IUIActions {
  return {
    type: TOGGLE_ADD_CATEGORY_MODAL
  }
}