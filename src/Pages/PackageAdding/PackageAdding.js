import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './PackageAdding.css';

const PackageAdding = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package Added Successfully');
                    reset();
                }
            })
    };

    return (
        <div className="add-package">
            <div className="bg-add-package mx-auto">
                <h2>Add a Package</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name" />

                    <textarea {...register("duration")} placeholder="Duration" />

                    <textarea {...register("day1")} placeholder="Day 1" />
                    <textarea {...register("description1")} placeholder="Description 1" />

                    <textarea {...register("day2")} placeholder="Day 2" />
                    <textarea {...register("description2")} placeholder="Description 2" />

                    <textarea {...register("day3")} placeholder="Day 3" />
                    <textarea {...register("description3")} placeholder="Description 3" />


                    <input {...register("img1")} placeholder="Image 1 URL" />
                    <input {...register("img2")} placeholder="Image 2 URL" />
                    <input {...register("img3")} placeholder="Image 3 URL" />

                    <input type="number" {...register("price")} placeholder="Price" />

                    <input type="submit" value="Add" className="btn-outline-primary" />
                </form>
            </div>
        </div>
    );
};

export default PackageAdding;