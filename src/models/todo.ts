export interface Todo {
  id: string
  name: string
  isComplete: boolean
} 

export enum FILTER {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}