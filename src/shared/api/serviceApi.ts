import { comments } from "../data/data"
import { ICommentModel, ICommentModelDataResult } from "../types/types"
import { handleRequestError } from "./utils"

// получаем список комментариев
export const getComments = async (): Promise<ICommentModelDataResult> => {
  try {
    return new Promise((resolve, reject) => {
      // reject(new Error('Failed to fetch comments'));

      setTimeout(() => {
        if (comments) {
          resolve(comments);
        } else {
          reject(new Error('Failed to fetch comments'));
        }
      }, 2000)
    })
  } catch (error) {
    // handleRequestError(error);
    return Promise.reject(error);
  }
}

// отправляем комментарий на сервер
export const postComment = async (comment: ICommentModel) : Promise<string> => {
  try {
    return new Promise(resolve => {
      setTimeout(() => {
        comments.data?.push(comment);
        comments.total && comments.total + 1;
        resolve('ok');
      }, 2000)
    })
  } catch (error) {
    handleRequestError(error)
    return Promise.reject(error)
  }
}