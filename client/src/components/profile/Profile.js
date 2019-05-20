import React, { Component }from "react"
import BottomMenu from '../bottom-menu/BottomMenu';
import {
  AreaChart, Area, XAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Enero', uv: 7.2,
  },
  {
    name: 'Febrero', uv: 50.4,
  },
  {
    name: 'Marzo', uv: 25.2,
  },
  {
    name: 'Abril', uv: 30.0,
  },
  {
    name: 'Mayo', uv: 70.9,
  },
];

export default class Profile extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  render() {
    return (
      <div>
        <div>
          <section>
            <img src="" alt="profile-pic"/>
            <div>
              <p>Maryjose Torres</p>
              <p>Mexico, CDMX</p>
            </div>
          </section>
          <section>
            <AreaChart
              width={300}
              height={200}
              data={data}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
          </section>
          <section></section>
        </div>
        <div className="sticky-menu">
          <BottomMenu/>
        </div>
      </div>
    )
  }
}
