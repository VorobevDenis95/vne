import { ICommentModel } from "../../shared/types/types";

export const findComment = (comments: ICommentModel[], id: number) => {
  return comments.find((comment) => comment.id === id);
}

