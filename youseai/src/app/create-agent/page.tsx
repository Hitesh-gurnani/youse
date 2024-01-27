"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { useDispatch } from 'react-redux';

import { cn } from "@/lib/utils"
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import PageTitle from "@/components/PageTitle"
import { Label } from "@radix-ui/react-label"
import { updateProfileFailure, updateProfileRequest, updateProfileSuccess } from "@/redux/reducers/itemReducer"

const profileFormSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(30, {
            message: "Username must not be longer than 30 characters.",
        })
        .refine(value => /^[a-zA-Z][a-zA-Z0-9]*$/.test(value), {
            message: "Username must start with a letter and can only contain letters and numbers.",
        }),
    systemPrompt: z
        .string()
        .min(10, {
            message: "System prompt must be at least 10 characters.",
        })
        .max(30, {
            message: "System prompt must not be longer than 30 characters.",
        }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

const defaultValues: Partial<ProfileFormValues> = {
}

export default function ProfileForm() {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    })

    function onSubmit(data: ProfileFormValues) {
        console.log(data);
        // dispatch(updateProfileRequest());
        // setTimeout(() => {
        //     try {
        //         dispatch(updateProfileSuccess(data));
        //     } catch (error) {
        //         dispatch(updateProfileFailure('error'));
        //     }
        // }, 1000); // Simulate a delay for demonstration purposes
    }

    return (
        <div>
            <PageTitle title="Create Agent" />
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Agent Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter the agent name" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="systemPrompt"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>System Prompt</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about your system prompt"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    You can <span>@mention</span> other users and organizations to
                                    link to them.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Upload File</Label>
                        <Input id="picture" type="file" />
                    </div>
                    <Button type="submit">Create Agent</Button>
                </form>
            </Form>
        </div>
    )
}