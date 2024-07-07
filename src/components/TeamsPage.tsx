import { getTeams } from "../services/teamsApi";

const Teams = () => {
  const { data, error } = getTeams({});
  console.log(error);
  console.log(data);

  return <div>Команды</div>;
};

export default Teams;
