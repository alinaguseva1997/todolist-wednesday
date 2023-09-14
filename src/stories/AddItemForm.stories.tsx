import type { Meta, StoryObj } from '@storybook/react';
import {AddItemForm, AddItemFormPropsType} from "../AddItemForm";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import TextField from "@mui/material/TextField/TextField";
import {IconButton} from "@mui/material";
import {AddBox} from "@mui/icons-material";

const meta: Meta<typeof AddItemForm> = {
    title: 'Todolists/AddItemForm',
    component: AddItemForm,
    tags: ['autodocs'],
    argTypes: {
        addItem: {action: 'addItem'},
    },
};

export default meta;

type Story = StoryObj<typeof AddItemForm>;

export const AddItemFormPrimary: Story = {
};

export const AddItemFormError = (args: AddItemFormPropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>("Title is required")

    const addItem = () => {
      if (title.trim() !== "") {
        args.addItem(title);
        setTitle("");
      } else {
        setError("Title is required");
      }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (error !== null) {
        setError(null);
      }
      if (e.charCode === 13) {
        addItem();
      }
    }

    return <div>
        <TextField variant="outlined"
    error={!!error}
    value={title}
    onChange={onChangeHandler}
    onKeyPress={onKeyPressHandler}
    label="Title"
    helperText={error}
    />
    <IconButton color="primary" onClick={addItem}>
        <AddBox />
        </IconButton>
        </div>
}; // В данном случае мы использовали код компоненты целиком с разметкой, так как изменение цвета инпута в красный зависит от состояния стейта error,  варианта другого не было