import * as React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import * as ReactDOM from 'react-dom';
import Column from './column';
import initialData from './initila-data';

class App extends React.Component {
  public state = initialData;

  public render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {
          this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map((taskId: string) => this.state.tasks[taskId]);
            return <Column key={column.id} column={column} tasks={tasks} />;
          })
        }
      </DragDropContext>
    )
  }

  private onDragEnd = (result: any) => {
    const {destination, source, draggableId} = result;
    if(!destination) {
      return;
    }
    if(destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
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
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
