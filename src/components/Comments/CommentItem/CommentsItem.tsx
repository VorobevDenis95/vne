import { useNavigate } from "react-router-dom";
import { ICommentModel } from "../../../shared/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const CommentsItem = ({ id, createDT, updateDT, text, isLike, user, userGuid }: ICommentModel) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/comments/${id}`);
  }

  return (
    <Card onClick={handleClick} className="cursor-pointer m-10 hover:shadow-md ">
      <CardHeader className="flex-row justify-center items-center">
        <Avatar>
          <AvatarImage className="w-12 h-12 rounded-full mr-5"  src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle>{user?.username}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{text}</p>
      </CardContent>
      <CardFooter className="flex ">
        <CardDescription className="flex flex-col justify-center ">
          {createDT && <p >
            <span className="mr-2">Дата создания</span>
            {createDT}
          </p>}
          {updateDT && <p>
            <span className="mr-2">Дата обновления</span>
            {updateDT}
          </p>}

        </CardDescription>

      </CardFooter>
    </Card>

    // <div onClick={handleClick}>
    //   <div className="flex justify-between">
    //     <span>{user?.username}</span>
    //     <div className="flex col-span-2">
    //       <span>{createDT}</span>
    //       <span>{updateDT}</span>
    //     </div>
    //   </div>
    //   <div>{text}</div>
    //   <div>{userGuid}</div>
    //   <div>{isLike}</div>
    // </div>
  )
}

export default CommentsItem;