import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Column from './column';
import initialData from './initila-data';

class App extends React.Component {
  public state = initialData;

  public render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map((taskId: string) => this.state.tasks[taskId]);
      return <Column key={column.id} column={column} tasks={tasks} />;
    })
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
