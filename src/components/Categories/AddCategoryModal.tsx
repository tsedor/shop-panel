import React, { useState } from 'react';
import { Form, Input, Modal, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { AppState } from '../../reducers';
import { toggleAddCategoryModal } from '../../reducers/ui/actions';
import { addNewCategory } from '../../reducers/categories/actions';

const StyledSelect = styled(Select)`
  width: 100%;
`;

interface IError {
  type: "" | "success" | "error" | "warning" | "validating" | undefined,
  helpText: string
}

const AddCategoryModal: React.FC = () => {
  const showModal = useSelector((state: AppState) => state.uiReducer.showAddCategoryModal);
  const requested = useSelector((state: AppState) => state.categoriesReducer.addRequested);
  const dispatch = useDispatch();
  const { Option } = Select;

  const [ name, changeName ] = useState('');
  const [ description, changeDescription ] = useState('');
  const [ nameError, setNameError ] = useState<IError>({
    type: "success",
    helpText: ""
  });
  const [ descriptionError, setDescriptionError ] = useState<IError>({
    type: "success",
    helpText: ""
  });

  const checkErrors = () => {
    name.length === 0 ? setNameError({type: "error", helpText: "Podaj nazwę kategorii"}) : setNameError({type: "", helpText: ""});
    description.length === 0 ? setDescriptionError({type: "error", helpText: "Podaj opis kategorii"}) : setDescriptionError({type: "", helpText: ""});
  }

  const handleCancelButton = () => {
    setNameError({
      type: "",
      helpText: ""
    })
    dispatch(toggleAddCategoryModal());
  }

  const handleOkButton = () => {
    if (name.length & description.length) {
      dispatch(addNewCategory(name, description));
    } else {
      checkErrors();
    }
  }
  
  return (
    <Modal cancelText="Anuluj" confirmLoading={requested} okText="Dodaj" onCancel={() => handleCancelButton()} onOk={() => handleOkButton()} title="Dodaj kategorie" visible={showModal}>
      <Form.Item label="Nazwa" validateStatus={nameError.type} help={nameError.helpText}>
        <Input onChange={(e: any) => changeName(e.target.value)} onBlur={() => checkErrors()} /> 
      </Form.Item>
      <Form.Item label="Opis (max 255 znaków)" validateStatus={descriptionError.type} help={descriptionError.helpText}>
        <Input onChange={(e: any) => changeDescription(e.target.value)} onBlur={() => checkErrors()} />
      </Form.Item>
      <Form.Item label="Wybierz kategorię nadrzędną">
        <StyledSelect style={{width: '100%'}} defaultValue="none">
          <Option value="none">Brak</Option>
          <Option value="abc">abc</Option>
          <Option value="def">def</Option>
          <Option value="ghi">ghi</Option>
        </StyledSelect>
      </Form.Item>
    </Modal>
  )
}

export default AddCategoryModal;