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
  dataslate: NonNullable<Dataslate>;
  onUpdated(): void;
}

const EditDataslate = (props: NewDataslateProps) => {
  const { dataslate } = props;
  const [teamName, setTeamName] = useState(dataslate.team_name);
  const [history, setHistory] = useState(dataslate.history ?? "");

  // const schema: ZodType<FormData> = z.object({
  //   history: z.string().min(10).max(150),
  //   faction: z.string().nonempty("Must select a Faction!!!"),
  // });
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>({
  //   resolver: zodResolver(schema),
  // });

  const onSubmit = async (data: FormData) => {
    const factionConverter = Number(data.faction);
    console.log(factionConverter);
    alert("Success!");
    window.location.href = "/";

    try {
      const { error } = await updateDataslate({
        history: data?.history,
      });

      if (error) throw error;
    } catch (e: any) {
      console.log("error: " + e.Message);
    }
  };

  const genarateHisotry = (): string => {
    const rollResult = Math.floor(Math.random() * 6);
    return dataslate.faction?.history_table?.[rollResult] ?? "";
  };

  return (
    <>
      <div className="navbar-end">
        <div className="navbar-item">
          <button className="button" onClick={() => props.onUpdated()}>
            Save
          </button>
        </div>
      </div>
      <div className="container">
        <form>
          <div className="field">
            <label className="label">Team Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={teamName}
                onChange={(event) => setTeamName(event.target.value)}
              />
            </div>
          </div>

          <div className="field is-group">
            <label className="label">History</label>
            <div className="control">
              <textarea
                className="textarea"
                value={history}
                onChange={(event) => setHistory(event.target.value)}
              />
            </div>
            {dataslate.faction?.history_table && (
              <div className="control">
                <div
                  className="button is-primary"
                  onClick={() => setHistory(genarateHisotry())}
                >
                  Genarate
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default EditDataslate;
