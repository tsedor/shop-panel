import React from 'react';
import { Button, Card, Divider, Icon, Table } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppState } from '../../reducers';
import { iCategory } from '../../reducers/categories/types';

const { Column } = Table;

const ActionsContainer = styled.div`
  margin: 0 0 20px 0;
  text-align: right;
`;

const StyledCard = styled(Card)`
`;

const Categories: React.FC = () => {
  const categoriesList = useSelector((state: AppState) => state.categoriesReducer.categories)
  return (
    <StyledCard title="Kategorie">
      <ActionsContainer>
        <Button type="primary" icon="plus">Dodaj kategorię</Button>
      </ActionsContainer>
      <Table rowKey="id" dataSource={categoriesList} size="small">
        <Column title="ID" dataIndex="id" key="id" sorter={(a: iCategory, b: iCategory) => a.id - b.id} />
        <Column title="Nazwa" dataIndex="name" key="name" sorter={(a: iCategory, b: iCategory) => a.name.localeCompare(b.name)} />
        <Column title="Opis" dataIndex="description" key="description" />
        <Column title="ID kategorii rodzica" dataIndex="parentId" key="parentId" />
        <Column title="Akcje" key="actions" render={(record: iCategory) => (
          <span>
            <Icon type="edit" theme="twoTone" twoToneColor="#1890ff" />
            <Divider type="vertical" />
            <Icon type="delete" theme="twoTone" twoToneColor="#eb2f96" />
          </span>
        )} />
      </Table>
    </StyledCard>
  )
}

export default Categories;