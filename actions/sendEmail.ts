"use server"

import { Resend } from "resend"
import { validateString } from "@/lib/utils"
import { getErrorMessage } from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form-email"
import React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    "use server";
    const message = formData.get("message")
    const sender = formData.get("senderEmail")

    if(!validateString(sender, 500)){
        return {error: "Invalid sender email"}
    }   

    if(!validateString(message, 5000)){
        return {error: "Invalid sender message"}
    } 

    let data;
    try{
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'garickmendez7@gmail.com',
            subject: 'Message from portfolio contact form',
            reply_to: sender as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: sender as string
            })
        });
        } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return{
        data
    }
}