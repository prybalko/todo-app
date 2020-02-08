export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

export class Todo implements ITodo {
  id: number;
  title = '';
  complete = false;

  constructor(values: Partial<ITodo> = {}) {
    Object.assign(this, values);
  }
}
