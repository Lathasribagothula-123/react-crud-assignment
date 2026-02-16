import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userFields } from "../config/formConfig";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required")
});

const UserForm = ({ onSubmit, selectedUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    selectedUser ? reset(selectedUser) : reset({});
  }, [selectedUser, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>{selectedUser ? "Edit User" : "Add User"}</h3>

      {userFields.map((field) => (
        <div key={field.name} style={{ marginBottom: 10 }}>
          <label>{field.label}</label>
          <br />
          <input
            type="text"
            maxLength={field.name === "phone" ? 10 : undefined}
            onInput={
              field.name === "phone"
                ? (e) =>
                    (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                : undefined
            }
            {...register(field.name)}
          />
          <p style={{ color: "red" }}>{errors[field.name]?.message}</p>
        </div>
      ))}

      <button type="submit">
        {selectedUser ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default UserForm;
