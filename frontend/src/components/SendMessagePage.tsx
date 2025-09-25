import { Button, Input } from "antd"
import TextArea from "antd/es/input/TextArea"
import { Controller, useForm } from "react-hook-form"

export const SendMessagePage = () => {
  const {control, handleSubmit, reset} = useForm({mode: "onChange"})
  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <main className="flex flex-col items-center gap-5">
      <h2 className="text-4xl">Send us your message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full items-center gap-3">
        <Controller control={control} name="name" defaultValue="" render={({field}) => <Input {...field} size="large" type="text" placeholder="Enter your name"/>} />
        <Controller control={control} name="phone" defaultValue="" render={({field}) => <Input {...field} size="large" type="text" placeholder="Enter your phone number" />} />
        <Controller control={control} name="message" defaultValue="" render={({field}) => <TextArea {...field} size="large" autoSize={{ minRows: 2, maxRows: 6 }} placeholder="Enter your message"/>} />
        <Button htmlType="submit" type="primary" size="large" variant="filled">Send message</Button>
      </form>
    </main>
  )
}