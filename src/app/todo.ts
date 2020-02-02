export class Todo {
  id: number;
  title = '';
  complete = false;

  constructor(values=  {}) {
    Object.assign(this, values);
  }
}
