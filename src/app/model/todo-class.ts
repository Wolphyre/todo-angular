export class TodoClass {

  name: string;
  tags: string[];
  private readonly _creationDate: number;
  priority: TodoPriority;

  constructor(name: string, tags: string[] = [], creationDate: Date = new Date(), priority: TodoPriority = TodoPriority.LOW){
    this.name = name;
    this.tags = tags;
    this._creationDate = creationDate.getTime();
    this.priority = priority;
  }

  get creationDate(): Date{
    return new Date(this._creationDate);
  }

  get color(): string{
    return getPriorityColor(this.priority);
  }

  get description(): string{
    return getPriorityString(this.priority);
  }

}

export enum TodoPriority {
  DONE =  -1,
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2,
  VERYHIGH = 3
}

export function getPriorityColor(priority: TodoPriority): string{
  switch (priority) {
    case TodoPriority.DONE:
      return 'gray';
    case TodoPriority.LOW:
      return 'green'
    case TodoPriority.MEDIUM:
      return 'yellow'
    case TodoPriority.HIGH:
      return 'orange'
    default:
      return 'red'
  }
}

export function getPriorityString(priority: TodoPriority): string {
  switch (priority) {
    case TodoPriority.DONE:
      return 'completato';
    case TodoPriority.LOW:
      return 'bassa'
    case TodoPriority.MEDIUM:
      return 'media'
    case TodoPriority.HIGH:
      return 'alta'
    default:
      return 'molto alta'
  }
}

