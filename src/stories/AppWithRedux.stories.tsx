import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import AppWithRedux from "../AppWithRedux";
import {store} from "../state/store";
import {ReduxStoreProviderDecorator} from "./decorators/ ReduxStoreProviderDecorator";

const meta: Meta<typeof AppWithRedux> = {
  title: 'Todolists/AppWithRedux',
  component: AppWithRedux,
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator]
};

export default meta;
type Story = StoryObj<typeof AppWithRedux>;

export const AppWithReduxStory: Story = {
  render: () => <AppWithRedux/>
};
