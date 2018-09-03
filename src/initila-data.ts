const initialData = {
  columnOrder: ['column-1', 'column-2', 'column-3'],
  columns: {
    'column-1': {
      id: 'column-1',
      taskIds: ['task-01','task-02','task-03','task-04','task-05','task-06'],
      title: 'To Do',
    },
    'column-2': {
      id: 'column-2',
      taskIds: ['task-07','task-08','task-09','task-10','task-11','task-12'],
      title: 'In Progress',
    },
    'column-3': {
      id: 'column-3',
      taskIds: ['task-13','task-14','task-15','task-16','task-17','task-18'],
      title: 'Completed',
    }
  },
  tasks: {
    'task-01': {'id': 'task-01', 'content': '1 Take out the garbage'},
    'task-02': {'id': 'task-02', 'content': '2 Take out the clothes'},
    'task-03': {'id': 'task-03', 'content': '3 Take out the buses'},
    'task-04': {'id': 'task-04', 'content': '4 Take out the bag'},
    'task-05': {'id': 'task-05', 'content': '5 Take out the money'},
    'task-06': {'id': 'task-06', 'content': '6 Take out the tie'},
    'task-07': {'id': 'task-07', 'content': '7 Take out the garbage'},
    'task-08': {'id': 'task-08', 'content': '8 Take out the clothes'},
    'task-09': {'id': 'task-09', 'content': '9 Take out the buses'},
    'task-10': {'id': 'task-10', 'content': '10 Take out the bag'},
    'task-11': {'id': 'task-11', 'content': '11 Take out the money'},
    'task-12': {'id': 'task-12', 'content': '12 Take out the tie'},
    'task-13': {'id': 'task-13', 'content': '13 Take out the bag'},
    'task-14': {'id': 'task-14', 'content': '14 Take out the money'},
    'task-15': {'id': 'task-15', 'content': '15 Take out the tie'},
    'task-16': {'id': 'task-16', 'content': '16 Take out the bag'},
    'task-17': {'id': 'task-17', 'content': '17 Take out the money'},
    'task-18': {'id': 'task-18', 'content': '18 Take out the tie'},
  },
};

export default initialData;
