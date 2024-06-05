import { ICommentModel } from "../../../../../shared/types/types";

const CommentEdit = ({id, createDT, updateDT, text, isLike, user} : ICommentModel) => {

  return (
    <form >
      <div className="flex justify-between">
        <span>{user?.username}</span>
        <div className="flex col-span-2">
          <span>{createDT}</span>
          <span>{updateDT}</span>
        </div>
      </div>
      <textarea>{text}</textarea>
      <div>{isLike}</div>
      <input type="file" />
      <button type="submit">Отправить</button>
      <button type="button">Отмена</button>
    </form>
  )
}

export default CommentEdit;