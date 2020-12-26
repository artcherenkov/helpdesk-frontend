import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from '../../components/header/header';
import Table from '../../components/table/table';
import { getFormState } from '../../store/reducers/app-state/selectors';
import { getTextEditorData } from '../../store/reducers/app-store/selectors';
import TableControls from '../../components/table-controls/table-controls';

const Container = styled.div`
  padding: 0 10px;
`;

const Main = () => {
  return (
    <Container>
      <Header />
      <TableControls />
      <Table />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isFormShown: getFormState(state),
  fromTextEdit: getTextEditorData(state),
});

export { Main };
export default connect(mapStateToProps, null)(Main);
