import type { Route } from "./+types/index";
import { Form } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { 
            title: "Contact Us - Modern React From the Beginning"
        }, 
        { 
            name: "description",
            content: "Contact Us page for Modern React From the Beginning course projects."
      },
  ];
}

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Name is required.";
    if (!email) {
        errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Email is invalid format.";
    }
    if (!subject) errors.subject = "Subject is required.";
    if (!message) errors.message = "Message is required.";

    if (Object.keys(errors).length > 0) {
        return { message: 'Please fill in all fields.', errors };
    }

    const data = {
        name,
        email,
        subject,
        message
    };

    return { message: 'Form submitted successfully!', data };
}

const ContactUsPage = ({ actionData }: Route.ComponentProps) => {
    const errors = actionData?.errors || {};

    return ( 
        <>
            <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                Contact Us
            </h2>
            
            { actionData?.message ? (
                <p className='mb-6 p-4 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md'>
                    {actionData.message}
                </p>
            ) : null }

            <Form
                method='post' 
                className='max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md'>
                <div className='mb-4'>
                    <label 
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-300'>
                            Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
                    />
                    { errors.name && (
                        <p className='text-red-400 text-sm mt-1'>
                            {errors.name}
                        </p>
                    )}
                </div>
                <div className='mb-4'>
                    <label 
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-300'>
                            Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
                    />
                    { errors.email && (
                        <p className='text-red-400 text-sm mt-1'>
                            {errors.email}
                        </p>
                    )}
                </div>
                <div className='mb-4'>
                    <label 
                        htmlFor='subject'
                        className='block text-sm font-medium text-gray-300'>
                            Subject
                    </label>
                    <input
                        type='text'
                        id='subject'
                        name='subject'
                        className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
                    />
                    { errors.subject && (
                        <p className='text-red-400 text-sm mt-1'>
                            {errors.subject}
                        </p>
                    )}
                </div>
                <div className='mb-4'>
                    <label 
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-300'>
                            Message
                    </label>
                    <textarea
                        id='message'    
                        name='message'
                        rows={5}
                        className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
                    />
                    { errors.message && (
                        <p className='text-red-400 text-sm mt-1'>
                            {errors.message}
                        </p>
                    )}
                </div>
                <button
                    type='submit'
                    className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer'
                >
                    Send Message
                </button>
            </Form>
        </>
     );
}
 
export default ContactUsPage;
