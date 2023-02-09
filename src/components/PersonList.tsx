import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((item) => (
        <h2 key={item.first}>
          {item.first} {item.last}
        </h2>
      ))}
    </div>
  );
}

export default PersonList;
