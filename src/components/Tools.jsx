import React from 'react'
import { Bar, Pie } from "react-roughviz";
const Tools = () => {
  return (
    <div>
      <div>
      <h3>Bar Chart</h3>
      <Bar
        data="https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv"
        labels="flavor"
        values="price"
      />

      <h3>Pie Chart</h3>
      <Pie
        data={{
          labels: ["North", "South", "East", "West"],
          values: [10, 5, 8, 3]
        }}
        title="Regions"
        colors={["red", "orange", "blue", "skyblue"]}
        roughness={8}
      />
    </div>
    </div>
  )
}

export default Tools