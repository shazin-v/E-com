"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Robert",
      lastName: "Fox",
      phone: "(252) 555-0126",
      email: "robertfox@example.com",
      address: "2464 Royal Ln. Mesa, New Jersey 45463",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Saved data:", data);
    setIsEditing(false);
  };

  const toggleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        {/* Edit / Save Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleEdit}
            type="button"
            className={`px-4 py-2 rounded-lg text-white ${
              isEditing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            {isEditing ? "Save" : "Edit Profile"}
          </button>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black disabled:bg-gray-100"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black disabled:bg-gray-100"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              {...register("phone", { required: "Phone number is required" })}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black disabled:bg-gray-100"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black disabled:bg-gray-100"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black disabled:bg-gray-100"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
