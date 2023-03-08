// import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        // const { name, email, id } = monster;

        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
// // import Card from "../card/card.component";
// import "./card-list.styles.css";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list" >
//         {monsters.map((monster) => {
//           const { name, email, id } = monster;

//           return (
//             <div className="card-container" key={id}>
//             <img
//               src={`https://robohash.org/${id}?set=set2&size=180x180`}
//               alt={`monster ${name}`}
//             />
//             <h2>{name}</h2>
//             <p>{email}</p>
//           </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
