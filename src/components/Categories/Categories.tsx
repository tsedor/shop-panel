import React, { useEffect } from 'react';
import { Button, Card, Divider, Icon, message, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppState } from '../../reducers';
import { ICategory } from '../../reducers/categories/types';
import AddCategoryModal from './AddCategoryModal';
import { toggleAddCategoryModal } from '../../reducers/ui/actions';
import { fetchCategoriesRequest, deleteCategoryRequest } from '../../reducers/categories/actions';

const { Column } = Table;

const ActionsContainer = styled.div`
  margin: 0 0 20px 0;
  text-align: right;
`;

const StyledCard = styled(Card)`
`;

const Categories: React.FC = () => {
  const categoriesList = useSelector((state: AppState) => state.categoriesReducer.categories);
  const categoriesRequest = useSelector((state: AppState) => state.categoriesReducer.fetchRequested);
  const error = useSelector((state: AppState) => state.categoriesReducer.error);
  const loggedIn = useSelector((state: AppState) => state.loginReducer.loggedIn);
  const dispatch = useDispatch();
  useEffect((): any => {
    loggedIn && dispatch(fetchCategoriesRequest())
  }, [loggedIn, dispatch]);
  useEffect(() => {
    if (error === 'success') {
      message.success("Poprawnie dodano kategorię");
    } else if (error !== '') {
      message.error(error);
    }
  }, [error])
  return (
    <StyledCard title="Kategorie">
      <AddCategoryModal />
      <ActionsContainer>
        <Button type="primary" icon="plus" onClick={() => dispatch(toggleAddCategoryModal())}>Dodaj kategorię</Button>
      </ActionsContainer>
      <Table rowKey="id" dataSource={categoriesList} size="small" loading={categoriesRequest}>
        <Column title="ID" dataIndex="id" key="id" sorter={(a: ICategory, b: ICategory) => a.id - b.id} />
        <Column title="Nazwa" dataIndex="name" key="name" sorter={(a: ICategory, b: ICategory) => a.name.localeCompare(b.name)} />
        <Column title="Opis" dataIndex="description" key="description" />
        <Column title="ID kategorii rodzica" dataIndex="parentId" key="parentId" />
        <Column title="Akcje" key="actions" render={(record: ICategory) => (
          <span>
            <Icon type="edit" theme="twoTone" twoToneColor="#1890ff" onClick={() => console.log(record.id)} />
            <Divider type="vertical" />
            <Icon type="delete" theme="twoTone" twoToneColor="#eb2f96" onClick={() => dispatch(deleteCategoryRequest(record.id))} />
          </span>
        )} />
      </Table>
    </StyledCard>
  )
}

export default Categories;