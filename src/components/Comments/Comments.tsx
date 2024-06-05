import { useEffect, useState } from "react";
import { getComments } from "../../shared/api/serviceApi";
import { ICommentModelDataResult } from "../../shared/types/types";
import CommentsItem from "./CommentItem/CommentsItem";
import Loader from "../Loader/Loader";

const Comments = () => {
  const [isLoading, setLoad] = useState(false);
  // const [isError, setError] = useState(false);
  const [data, setData] = useState<ICommentModelDataResult>({});

  useEffect(() => {
    setData({});
    setLoad(true);
    // setError(false);
    const getData = async() => {
      const response = await getComments();
      setData(response);
      setLoad(false);
    }
    getData();
  }, [])


  return (
    <>
      {isLoading && <Loader/>}
      {data.data?.map((comment) => <CommentsItem key={comment.id} {...comment} />)}
    </>
  )
}

export default Comments