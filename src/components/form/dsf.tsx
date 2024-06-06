
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "../ui/textarea"
import { Checkbox } from "@radix-ui/react-checkbox"
 
const formSchema = z.object({
  text: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  isLike: z.boolean() || z.null(),
})
export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
      isLike: undefined,
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div> {/* Обернуть два элемента внутри div */}
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <>
              <FormItem>
                <FormLabel>Комментарий</FormLabel>
                  <FormControl>
                  <Textarea placeholder="Введите свой комментарий" {...field} />
                  </FormControl>
                <FormDescription>
                  Нам важно ваше мнение
                </FormDescription>
                <FormMessage />
              </FormItem>
              <FormField control={form.control} name="isLike" >
                <Checkbox {...field}/>
              </FormField>
              </>
            )}
          />
          <Button type="submit">Submit</Button>
        </div> {/* Закрываем div */}
      </form>
    </Form>
  )
}