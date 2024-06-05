import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import {ICommentModel} from "../../../../shared/types/types";
import { getComments } from "../../../../shared/api/serviceApi";
import { findComment } from "../../utils";
// import CommentsItem from "../CommentsItem";
import Loader from "../../../Loader/Loader";
import CommentEdit from "./CommentEdit/CommentEdit";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { IFormEdit } from "@/shared/types/typesForm";



const CommentAbout = () => {
  const [isLoading, setLoad] = useState(false);
  const [isError, setError] = useState(false);
  const [comment, setComment] = useState<ICommentModel>();
  // const [data, setData] = useState<ICommentModelDataResult>({});
  const params = useParams();

  useEffect(() => {
    setLoad(true);
    setError(false);
    const getData = async() => {
      const response = await getComments();
      
      
      const data = response;
      data.data && setComment(findComment(data.data, Number(params.id)));
      setLoad(false);
    }
    getData();
  }, [params.id])




  const form = useForm<IFormEdit>({
    defaultValues: {
      
    }
  })
  const { register, handleSubmit } = form

  return (
<Form >
      <form  className="space-y-8"><FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Textarea placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    // <div>
    //     {isError && <span>Произошла ошибка</span>}
    //     {isLoading && <Loader/>}
    //     {comment && <CommentEdit {...comment} />}
    //     {!comment && !isLoading && <>
    //       <span>Комментарий не найден</span>
    //     </> }
    // </div>
  )

}

export default CommentAbout