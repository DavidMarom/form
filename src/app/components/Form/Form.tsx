"use client";

import React from "react";
import { formSchema, formTypes } from '../../types/types';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function FormWithReactHookFormAndZod() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<formSchema>({ resolver: zodResolver(formTypes) });

    const onSubmit = async (data: formSchema) => {
        fetch("/api/form", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 w-96">

            <input {...register("socialSecurityNumber")} type="text" placeholder="Social Security Number" className="px-4 py-2 rounded" />
            {errors.socialSecurityNumber && (<p className="text-red-500">{errors.socialSecurityNumber.message}</p>)}

            <input {...register("firstName")} type="text" placeholder="First Name" className="px-4 py-2 rounded" />
            {errors.firstName && (<p className="text-red-500">{errors.firstName.message}</p>)}

            <input {...register("lastName")} type="text" placeholder="Last Name" className="px-4 py-2 rounded" />
            {errors.lastName && (<p className="text-red-500">{errors.lastName.message}</p>)}

            <input {...register("dateOfBirth")} type="date" placeholder="Date of Birth" className="px-4 py-2 rounded" />
            {errors.dateOfBirth && (<p className="text-red-500">{errors.dateOfBirth.message}</p>)}

            <input {...register("email")} type="email" placeholder="Email" className="px-4 py-2 rounded" />
            {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}

            <button
                disabled={isSubmitting}
                type="submit"
                className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
            >
                Submit
            </button>
        </form>
    );
}