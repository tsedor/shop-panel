import { ICategoriesState } from "../types";
import { ICategoriesRequestTypes } from "./types";

const initialState: ICategoriesState = {
  requested: false,
  error: '',
  categories: [{
    id: 1,
    name: 'Płyty Główne',
    description: 'Opis',
    parentId: 0
  },{
    id: 2,
    name: 'Karty Graficzne',
    description: 'Opis 2',
    parentId: 0
  },{
    id: 3,
    name: 'Procesory',
    description: 'Opis 3',
    parentId: 0
  },{
    id: 4,
    name: 'Pamięci RAM',
    description: 'Opis 3',
    parentId: 0
  },{
    id: 5,
    name: 'Obudowy',
    description: 'Opis 3',
    parentId: 0
  },{
    id: 6,
    name: 'Zasilacze',
    description: 'Opis 3',
    parentId: 0
  },{
    id: 7,
    name: 'Peryferia',
    description: 'Opis 3',
    parentId: 0
  }]
}

const categoriesReducer = (state = initialState, action: ICategoriesRequestTypes) => {
  switch (action.type) {
    default:
      return {...state}
  }
}

export default categoriesReducer;