import * as React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Task from './task';

interface IProps {
  column: any,
  tasks: any,
}
class Column extends React.Component<IProps> {
  public render(){
    return (
      <div className="column-container">
        <div className='title'>{this.props.column.title}</div>
        <Droppable droppableId={this.props.column.id}>
          { (provided, snapshot) =>
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`task-container ${snapshot.isDraggingOver ? 'draggingOver': ''}` }
            >
            {
              this.props.tasks.map((task: any, idx: number) => <Task key={task.id} task={task} index={idx} />)
            }
            {provided.placeholder}
            </div>
          }
        </Droppable>
      </div>
    )
  }
}

export default Column;
