"use client";

import React from "react";
import { formSchema, formTypes } from '../../types/types';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { heb } from "@/app/types/lang"

export default function FormWithReactHookFormAndZod() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<formSchema>({ resolver: zodResolver(formTypes) });
    const [yearsOld, setYearsOld] = React.useState<number>(0);

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

    const yearGap = (birthDate: string) => new Date().getFullYear() - parseInt(birthDate.slice(0, 4));

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 w-96">

            <div className="form-grid">
                <div>{heb.details}</div>

                <div className="grid-3-col">
                    <div>
                        <input {...register("socialSecurityNumber")} type="text" placeholder={heb.id} className="px-4 py-2 rounded text-xs" />
                        {errors.socialSecurityNumber && (<p className="text-red-500 text-xs">{errors.socialSecurityNumber.message}</p>)}
                    </div>
                    <div>
                        <input {...register("firstName")} type="text" placeholder={heb.firstName} className="px-4 py-2 rounded text-xs" />
                        {errors.firstName && (<p className="text-red-500 text-xs">{errors.firstName.message}</p>)}
                    </div>
                    <div>
                        <input {...register("lastName")} type="text" placeholder={heb.lastName} className="px-4 py-2 rounded text-xs" />
                        {errors.lastName && (<p className="text-red-500 text-xs">{errors.lastName.message}</p>)}
                    </div>

                    <div>
                        <input {...register("dateOfBirth")}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => { setYearsOld(yearGap(ev.target.value)) }}
                            type="date" placeholder="Date of Birth" className="px-4 py-2 rounded text-xs"
                        />
                        {yearsOld > 0 ? <p className="text-xs">({heb.age} {yearsOld})</p> : null}
                        {errors.dateOfBirth && (<p className="text-red-500 text-xs">{errors.dateOfBirth.message}</p>)}
                    </div>

                </div>
                <div>{heb.contact}</div>
                <div>
                    <input {...register("email")} type="email" placeholder={heb.email} className="px-4 py-2 rounded text-xs" />
                    {errors.email && (<p className="text-red-500 text-xs">{errors.email.message}</p>)}
                </div>
                <div>
                    <button disabled={isSubmitting} type="submit" className="bg-blue-500 disabled:bg-gray-500 py-2 rounded font-color-white">{heb.save}</button>
                </div>
            </div>
        </form>
    );
}