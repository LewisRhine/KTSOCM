import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataslate, Dataslate, updateDataslate } from "../superbaseClient";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";

type FormData = {
  history: string;
  faction: string;
};

interface NewDataslateProps {
  session: Session;
}

const EditDataslate = (props: NewDataslateProps) => {
  const { dataslateId } = useParams();
  const [dataslate, setDataslate] = useState<Dataslate | null>(null);
  const [error, setError] = useState(false);
  console.log(dataslateId);
  console.log(dataslate);

  useEffect(() => {
    if (!dataslateId) return;
    const fetchDataslate = async () => {
      try {
        const { data: dataslate, error } = await getDataslate(+dataslateId);
        if (error) throw error;
        setDataslate(dataslate);
        setError(false);
      } catch (e: any) {
        setError(true);
      }
    };

    fetchDataslate();
  }, []);

  if (error) return <h1> There was an error loading Dataslate! </h1>;
  if (!dataslate) return <h1> Loading </h1>;

  const schema: ZodType<FormData> = z.object({
    history: z.string().min(10).max(150),
    faction: z.string().nonempty("Must select a Faction!!!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const factionConverter = Number(data.faction);
    console.log(factionConverter);
    alert("Success!");
    window.location.href = "/";

    try {
      const { error } = await updateDataslate({
        history: data?.history,
        faction_id: factionConverter,
        user_id: props.session?.user.id,
      });

      if (error) throw error;
    } catch (e: any) {
      console.log("error: " + e.Message);
    }
  };

  return (
    <>
      <div className="card-header-title is centered">
        Team Name: {dataslate.team_name}
      </div>
      <div className="has-background-grey-lighter">
        <p>Faction: {dataslate.faction?.name}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Enter Team History... </label>
        <input type="text" {...register("history")} />
        {errors.history && (
          <span style={{ color: "red" }}>{errors.history.message}</span>
        )}
        <span style={{ color: "red" }}>{errors.faction?.message}</span>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditDataslate;
