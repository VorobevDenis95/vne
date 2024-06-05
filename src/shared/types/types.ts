// описание основных типов

export interface ICommentModelDataResult {
  total?: number,
  data?: ICommentModel[],
}

export interface ICommentModel {
  id: number,
  createDT?: string,
  updateDT?: string,
  user?: UserModel,
  userGuid?: string,
  text?: string | null,
  isLike?: boolean | null,
}

export interface UserModel {
  username: string;
}