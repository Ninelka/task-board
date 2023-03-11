export interface ReorderTaskAction {
  colId: string;
  newTaskIds: string[];
}

export interface MoveTaskAction {
  startColId: string;
  finishColId: string;
  newStartTaskIds: string[];
  newFinishTaskIds: string[];
}
