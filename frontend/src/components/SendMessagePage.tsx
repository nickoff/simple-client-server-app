import { Button, Input } from "antd"
import TextArea from "antd/es/input/TextArea"

export const SendMessagePage = () => {

  return (
    <main className="flex flex-col items-center gap-5">
      <h2 className="text-4xl">Send us your message</h2>
      <form className="flex flex-col w-full items-center gap-3">
        <Input name="name" size="large" type="text" placeholder="Enter your name"/>
        <Input name="phone" size="large" type="text" placeholder="Enter your phone number"/>
        <TextArea name="message" size="large" autoSize={{ minRows: 2, maxRows: 6 }} placeholder="Enter your message"/>
        <Button htmlType="submit" type="primary" size="large" variant="filled">Send message</Button>
      </form>
    </main>
  )
}