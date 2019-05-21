import React, { Component } from "react";
import BottomMenu from "../bottom-menu/BottomMenu";
import "./profile.css"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from "recharts";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";



const data = [
  {
    name: "Enero",
    uv: 7.2
  },
  {
    name: "Febrero",
    uv: 50.4
  },
  {
    name: "Marzo",
    uv: 25.2
  },
  {
    name: "Abril",
    uv: 30.0
  },
  {
    name: "Mayo",
    uv: 70.9
  }
];

export default class Profile extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";

  render() {
    return (
      <div>
        <div>
          <section>
            <img src="" alt="profile-pic" />
            <div>
              <p>Maryjose Torres</p>
              <p>Mexico, CDMX</p>
              <p>Objetivo: Bajar de peso</p>
            </div>
          </section>
          <section>
            <AreaChart
              width={300}
              height={200}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="amt"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </section>
          </div>
          <div className="form-profile">
            <Form>
              <Form.Group widths="equal" className="inputs-profile">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Peso"
                  placeholder="Peso"
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Cintura"
                  placeholder="Cintura"
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Cadera"
                  placeholder="Cadera"
                />
              </Form.Group>
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Objetivo"
                placeholder="Objetivo"
              />
              <Form.Field
                id="form-button-control-public"
                control={Button}
                content="Confirm"
              />
            </Form>
          </div>
        <div className="sticky-menu">
          <BottomMenu />
        </div>
      </div>
    );
  }
}
