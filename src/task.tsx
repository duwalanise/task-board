import * as React from 'react';
import {Draggable} from 'react-beautiful-dnd';

const Task = (props: any) => (
  <Draggable draggableId={props.task.id} index={props.index}>
    {(provided, snapshot) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={`task ${snapshot.isDragging ? 'dragging' : ''}`}
      >
        {props.task.content}
      </div>
    )}
  </Draggable>
);

export default Task;
