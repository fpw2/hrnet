import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Test() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
  } = useForm({ defaultValues: { 
    firstName: "anything",
    lastName: "otherthing" 
} });

  const onSubmit = (data) => {
    console.log("test",data)
  };

    useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ 
        firstName: "",
        lastName: ""
    });
    }
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <select name="country" {...register("select")}>
          <option value="al">al</option>
          <option value="fr">fr</option>
      </select>
      <input type="submit" />
    </form>
  );
}