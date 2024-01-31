import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import sendEmail from "@/lib/sendEmail";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

function ContactForm() {
  const form = useForm({ defaultValues: { email: "", message: "" } });

  const text = form.watch("message");

  const [rows, setRows] = useState(5);
  useEffect(() => {
    const charactersPerLine = 40;
    const len = text.split("\n").reduce((acc: any, line: any) => {
      return acc + Math.ceil(line.length / charactersPerLine);
    }, 0);
    const newRows = Math.max(5, len);
    setRows(newRows);
  }, [text]);

  const { toast } = useToast();

  const handleSubmit = (data: { email: string; message: string }): void => {
    sendEmail(data);
    toast({
      title: "Message sent successfully",
      duration: 2500,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <Toaster />
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-[20rem] mx-auto pt-4 space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: {
              value: true,
              message: "*This is required",
            },
            maxLength: {
              value: 35,
              message: "Maximum number of characters is 35",
            },
            pattern: {
              value: /^[a-zA-Z0-9+_.-]{3,}@[a-zA-Z0-9.-]{3,}[.][a-zA-Z]{2,4}$/,
              message: "Must be a valid email",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Your email..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          rules={{
            required: {
              value: true,
              message: "*This is required",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  {...field}
                  rows={rows}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={"outline"}
          type="submit"
          className="hover:text-primaryColor"
        >
          Send
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
