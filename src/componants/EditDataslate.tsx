import { useContext, useState } from "react";
import { Dataslate, updateDataslate } from "../superbaseClient";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sessionContext } from "../context/sessionContext";

type FormData = {
  history: string;
  faction: string;
};

interface NewDataslateProps {
  dataslate: NonNullable<Dataslate>;
  onUpdated(): void;
}

const EditDataslate = (props: NewDataslateProps) => {
  const { dataslate } = props;
  const [teamName, setTeamName] = useState(dataslate.team_name);
  const [history, setHistory] = useState(dataslate.history ?? "");
  const session = useContext(sessionContext)

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

  const onSubmit = async () => {
    try {
      const { error } = await updateDataslate({
        id: dataslate.id,
        history: history,
      });

      if (error) throw error;
      props.onUpdated();
      window.location.reload();
    } catch (e: any) {
      console.log("error: " + e.Message);
    }
  };

  const updateHistory = () => {
    if (history !== dataslate.history) {
      onSubmit();
    } else {
      props.onUpdated();
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
          <button className="button" onClick={updateHistory}>
            Save
          </button>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
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
