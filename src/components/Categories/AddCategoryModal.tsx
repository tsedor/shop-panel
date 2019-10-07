import React from 'react';
import { Form, Input, Modal, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { AppState } from '../../reducers';
import { ToggleAddCategoryModal } from '../../reducers/ui/actions';

const StyledSelect = styled(Select)`
  width: 100%;
`;

const AddCategoryModal: React.FC = (props) => {
  const showModal = useSelector((state: AppState) => state.uiReducer.showAddCategoryModal);
  const dispatch = useDispatch();
  const { form } = props as any;
  const { Option } = Select;
  return (
    <Modal cancelText="Anuluj" okText="Dodaj" onCancel={() => dispatch(ToggleAddCategoryModal())} title="Dodaj kategorie" visible={showModal}>
      <Form.Item label="Nazwa">
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: 'Podaj nazwę kategorii' }],
        })(
          <Input />
        )}
      </Form.Item>
      <Form.Item label="Opis (max 255 znaków)">
        {form.getFieldDecorator('description', {
          rules: [{ required: true, message: 'Podaj opis kategorii' }],
        })(
          <Input />
        )}
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

export default Form.create()(AddCategoryModal);