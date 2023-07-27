import { useForm } from "react-hook-form";
//KNEEL BEFORE
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  killTeamName: string;
  faction: string;
};
const DataslateForm = () => {
  const schema: ZodType<FormData> = z.object({
    killTeamName: z.string().min(2).max(50),
    faction: z.string().min(2).max(50),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label> Enter Kill Team Name... </label>
      <input type="text" {...register("killTeamName")} />
      {errors.killTeamName && (
        <span style={{ color: "red" }}>{errors.killTeamName.message}</span>
      )}
      <label> Chose Faction </label>
      <input type="text" {...register("faction")} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataslateForm;
