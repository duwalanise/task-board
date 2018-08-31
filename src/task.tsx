import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 8px;
  border: solid 1px lightgrey;
  border-radius: 2px;
  padding: 8px;
`;

const Task = (props: any) => <Container>{props.task.content}</Container>

export default Task;
