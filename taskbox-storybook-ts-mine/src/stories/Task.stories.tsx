import React from "react";
import { action } from "@storybook/addon-actions";

import Task from "../components/Taskbox/Task";
import { TaskState } from "../components/Taskbox/task-state";

export default {
  component: Task,
  title: "Task",
  excludeStories: /.*Data$/
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: TaskState.TASK_INBOX,
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

export const Default = () => {
  return <Task task={{ ...taskData }}{...actionsData} />;
};

export const Pinned = () => (
  <Task task={{ ...taskData, state: TaskState.TASK_PINNED }} {...actionsData} />
);

export const Archived = () => (
  <Task task={{ ...taskData, state: TaskState.TASK_ARCHIVED }} {...actionsData} />
);

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = () => (
  <Task task={{ ...taskData, title: longTitle }} {...actionsData} />
);
