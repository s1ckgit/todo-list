export interface ITodoItem {
  id: number;
  title: string;
  status: 'active' | 'completed'
}

export type VisibilityMode = 'active' | 'completed' | 'all';
