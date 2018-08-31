import * as React from 'react';
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
        <TaskList>
        {
          this.props.tasks.map((task: any) => <Task key={task.id} task={task} />)
        }
        </TaskList>
      </Container>
    )
  }
}

export default Column;
