import * as React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './task';

interface IProps {
  column: any,
  tasks: any,
}

const Container = styled.div`
  margin: 8px;
  border: solid 1px lightgrey;
  border-radius: 2px;
`;
const Title = styled.div`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

class Column extends React.Component<IProps> {
  public render(){
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          { (provided) =>
            <TaskList
              {...provided.droppableProps}
              innerRef={provided.innerRef}
            >
            {
              this.props.tasks.map((task: any, idx: number) => <Task key={task.id} task={task} index={idx} />)
            }
            {provided.placeholder}
            </TaskList>
          }
        </Droppable>
      </Container>
    )
  }
}

export default Column;
