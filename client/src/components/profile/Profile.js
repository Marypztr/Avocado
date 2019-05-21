import React, { Component } from "react";
import BottomMenu from "../bottom-menu/BottomMenu";
import "./profile.css"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from "recharts";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { Icon } from 'semantic-ui-react'

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

let peso = "59 Kg";

export default class Profile extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";

  render() {
    return (
      <div>
        <div>
          <section className="user-data">
            <div className="avatar">
              <img src="https://images.onlinelabels.com/images/clip-art/GDJ/Female%20Avatar%204-277088.png" width="80px" alt="profile-pic" />
            </div>
            <div className="user-data-text">
              <p className="name">Maryjose Torres</p>
              <p className="city"> <Icon className="location arrow" />Mexico, CDMX</p>
              <p className="goal">Objetivo: Bajar de peso</p>
            </div>
          </section>
          <hr className="divition" />
          <section className="chart-position">
            <div className="border-chart">
            <p>Tu progreso</p>
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

            </div>
          </section>
          </div>
          <section>
            <div className="profile-buttons">
              <div className="peso">
                <div>
                  <Icon className="weight" />
                  <p>Peso</p>
                </div>
                <p>{peso}</p>
              </div>
              <div className="cintura">
                <div>
                  <Icon className="female" />
                  <p>Cintura</p>
                </div>
                <p>70 cm.</p>
              </div>
              <div className="cadera">
                <div>
                  <Icon className="female" />
                  <p>Cadera</p>
                </div>
                <p>92 cm.</p>
              </div>
              <div className="objetivo">
                <div>
                  <Icon className="flag checkered" />
                  <p>Objetivo</p>
                </div>
                <p>Bajar de Peso</p>
              </div>
            </div>
          </section>
          <hr className="divition" />
          <h3>Edita tu Perfil</h3>
          <section className="form-profile">
            <Form>
                <Form.Group widths="equal" className="inputs-profile">
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Peso"
                    placeholder="Peso"
                    value = {this.peso}
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
          </section>
        <div className="sticky-menu">
          <BottomMenu />
        </div>
      </div>
    );
  }
}
