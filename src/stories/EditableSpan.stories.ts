import type { Meta, StoryObj } from '@storybook/react';
import {EditableSpan} from "../EditableSpan";

const meta: Meta<typeof EditableSpan> = {
  title: 'Todolists/EditableSpan',
  component: EditableSpan,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
  },
  args: {
    value: 'react'
  }
};

export default meta;
type Story = StoryObj<typeof EditableSpan>;

export const EditableSpanDefaultValue: Story = {};
