"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/router"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is a required"
    })
})
const CreateCoursePage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    })

    const { isSubmitting, isValid } = form.formState

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }
    return (<div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
        <div>
            <h1 className="text-2xl">Name your course</h1>
            <p className="text-sm text-slate-600">
                Don&apos;t worry, you can change it later.</p>
            <Form {...form}>
                <form></form>
            </Form>
        </div></div>);
}

export default CreateCoursePage;