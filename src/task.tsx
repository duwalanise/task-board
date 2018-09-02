import * as React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  margin: 8px;
  border: solid 1px lightgrey;
  border-radius: 2px;
  padding: 8px;
  background: white;
`;

const Task = (props: any) => (
  <Draggable draggableId={props.task.id} index={props.index}>
    {(provided) => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
      >
        {props.task.content}
      </Container>
    )}
  </Draggable>
);

export default Task;
