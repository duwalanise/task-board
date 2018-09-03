import * as React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import * as ReactDOM from 'react-dom';
import Column from './column';
import initialData from './initila-data';
import './style.css';

class App extends React.Component {
  public state = initialData;

  public render() {
    return (
      <div className='task-board'>
        <DragDropContext onDragEnd={this.onDragEnd}>
        {
          this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map((taskId: string) => this.state.tasks[taskId]);
            return <Column key={column.id} column={column} tasks={tasks} />;
          })
        }
      </DragDropContext>
      </div>
    )
  }

  private onDragEnd = (result: any) => {
    const {destination, source, draggableId} = result;
    if(!destination) {
      return;
    }
    if(destination.droppableId === source.droppableId) {
      if(source.index === destination.index){
        return;
      }
      const column = this.state.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index,1);
      newTaskIds.splice(destination.index,0,draggableId);

      const newColumn = {
        ...column,
        taskIds: newTaskIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        }
      };
      this.setState(newState);
    } else {
      const srcColumn = this.state.columns[source.droppableId];
      const destColumn = this.state.columns[destination.droppableId];
      const srcTaskIds = Array.from(srcColumn.taskIds);
      srcTaskIds.splice(source.index, 1);
      const destTaskIds = Array.from(destColumn.taskIds);
      destTaskIds.splice(destination.index, 0, draggableId);
      this.setState({
        ...this.state,
        columns:{
          ...this.state.columns,
          [srcColumn.id]: {
            ...srcColumn,
            taskIds: srcTaskIds,
          },
          [destColumn.id]: {
            ...destColumn,
            taskIds: destTaskIds,
          }
        }
      });
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
