import React, {useState} from "react";
// import axios from "axios";
// import React, {useEffect, useState} from "react";
import './List.css';


const INITIAL_STATE = [
  {id:1, name: "Standart", price: "5", delete: false},
  {id:2, name: "Platinum", price: "3", delete: false},
  {id:3, name: "Silver", price: "1", delete: false},
  {id:4, name: "Standart++", price: "7", delete: false}
];

function List(){
  const [liste, setListe] = useState(INITIAL_STATE);
  // const [liste, setListe] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios.get('https://api.ziyuno.com/api/package/packages/en')
  //   .then(response => setListe(response.data))
  //   .catch(error => setError(error))
  // }, []);

  // if (error) {
  //   return alert("Error:", error.message);
  // }
  // else{
    return(
      <div className="list">
        <table>
          <thead>
            <th>Adı</th>
            <th>Fiyatı</th>
            <th>İşlem</th>
          </thead>
          <tbody>
            {liste.map(item => 
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td className="delete"><a>Sil</a></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  // }
}
export default List;