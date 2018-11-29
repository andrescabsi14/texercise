let taskList = [
  {
    id: 1,
    title: 'Task Title',
    img: 'https://picsum.photos/1600/900',
    description:
      "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.", /// <= Pretty long
    createdOn: new Date(),
    createdBy: 'Jane Smith',
    dueDate: new Date('01/01/2020'), /// Has enough time to finish
  },
  {
    id: 2,
    title: 'Task Title',
    description:
      "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
    createdOn: new Date(),
    createdBy: 'Jane Smith',
    dueDate: new Date('01/01/2018'), /// <== Past due.
  },
  {
    id: 3,
    title: 'Task Title',
    img: 'https://picsum.photos/1600/900?v1', /// <=== big image
    description:
      "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
    createdOn: new Date(),
    createdBy: 'Jane Smith',
    dueDate: new Date('01/01/2020'),
    completed: true,
  },
  {
    id: 4,
    title: 'Task Title',
    description:
      "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
    createdOn: new Date(),
    createdBy: 'Jane Smith',
    dueDate: new Date('01/01/2020'),
  },
  {
    id: 5,
    title: 'Task Title',
    description:
      "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
    createdOn: new Date(),
    createdBy: 'Jane Smith',
    dueDate: new Date('01/01/2018'),
  },
  {
    id: 6,
    title: 'Task Title',
    description:
      "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
    createdOn: new Date(),
    createdBy: 'Jane Smith',
    dueDate: new Date('01/01/2018'),
  },
  {
    id: 7,
    title: 'Task Title',
    description:
      "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
    createdOn: new Date(),
    createdBy: 'Jane Smith',
    dueDate: new Date('01/01/2020'),
  },
]

export default taskList
