import * as React from "react";
import { useState } from "react";
import Pet from "../interfaces/Pet";
export function ArraysEx() {
  const [colors, setColors] = React.useState<string[]>([
    "red",
    "orange",
    "yellow",
  ]);

  function addColor(color: string): void {
    setColors([...colors, color]);
  }

  const [pets, setPets] = useState<Pet[]>([
    { id: 1, type: 'cat', name: 'Fluffer Nutters' },
    { id: 2, type: 'dog', name: 'Mocha' },
    { id: 3, type: 'hamster', name: 'Sophie' }
  ]);

  const deletePet = (id: number) => {
    setPets(pets.filter(pet => pet.id !== id));
  }

  function Pets(color: string): void {
    setColors([...colors, color]);
  }

  return (
    <div>
      <h1>Array Exercise</h1>
      <h1 className="Colortop">Colors</h1>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <button className="Greenb" onClick={() => addColor("Green")}>Add Green</button>
      <button className="Blueb" onClick={() => addColor("Blue")}>Add Blue</button>
      <button className="Violetb" onClick={() => addColor("Violet")}>Add Violet</button>
      <h1>Pets</h1>
      <table>
        <thead>
          <tr>
            <th className="NameTitle">Name</th>
            <th className="TypeTitle">Type</th>
            <th className="petDelete">Action</th>
          </tr>
        </thead>
        <tbody>
          {pets.map(pet => (
            <tr key={pet.id}>
              <td className="petNames">{pet.name}</td>
              <td className="petTypes">{pet.type}</td>
              <td>
                <button  className="pDelete" onClick={() => deletePet(pet.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 
  );
}