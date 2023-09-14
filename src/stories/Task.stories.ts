import type { Meta, StoryObj } from '@storybook/react';
import {Task} from "../Task";

const meta: Meta<typeof Task> = {
  title: 'Todolists/Task',
  component: Task,
  tags: ['autodocs'],
  argTypes: {
    changeTaskStatus: { action: 'changeTaskStatus' },
    changeTaskTitle: { action: 'changeTaskTitle' },
    removeTask: { action: 'removeTask' },
  },
  args: {
    task: {id: '3', title: 'react', isDone: false},
    todolistId: '1'
  }
};

export default meta;
type Story = StoryObj<typeof Task>;

export const TaskIsNotDone: Story = {};

export const TaskIsDone: Story = {
  args: {
    task: {id: '3', title: 'react', isDone: true},
  }
};

