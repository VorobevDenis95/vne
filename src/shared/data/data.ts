import { ICommentModelDataResult } from "../types/types";

// обьект с комментариями

export const comments : ICommentModelDataResult = {
  total: 5,
  data: [
    {
      id: 1,
      createDT: '2022-10-01 12:00:00',
      updateDT: '2022-10-02 12:45:00',
      text: 'Comment 1',
      user: {
        username: 'User 1'
      },
      isLike: null
    },
    {
      id: 2,
      text: 'Comment 2',
      isLike: true
    },
    {
      id: 3,
      text: 'Comment 3',
      isLike: false
    },
    {
      id: 4,
      text: 'Comment 4',
      isLike: false
    },
    {
      id: 5,
      text: 'Comment 5',
      isLike: true
    }
  ]
}