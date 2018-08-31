const initialData = {
  columnOrder: ['column-1'],
  columns: {
    'column-1': {
      id: 'column-1',
      taskIds: ['task-1','task-2','task-3','task-4','task-5','task-6'],
      title: 'todo',
    }
  },
  tasks: {
    'task-1': {'id': 'task-1', 'content': 'Take out the garbage'},
    'task-2': {'id': 'task-2', 'content': 'Take out the clothes'},
    'task-3': {'id': 'task-3', 'content': 'Take out the buses'},
    'task-4': {'id': 'task-4', 'content': 'Take out the bag'},
    'task-5': {'id': 'task-5', 'content': 'Take out the money'},
    'task-6': {'id': 'task-6', 'content': 'Take out the tie'},
  },
};

export default initialData;
