import React, { Component } from "react";
import BottomMenu from "../bottom-menu/BottomMenu";
import { PieChart, Pie, Cell } from "recharts";
import "./Recipedetail.css";
import AppServices from "../../services/AppServices";

const service = new AppServices();

const data = [
  { name: "Proteina", value: 400 },
  { name: "Grasa", value: 300 },
  { name: "Carbohidratos", value: 300 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Recipedetail extends Component {
  state = {
    detail: {ingredientes: []},
    loading: true
  };

  componentDidMount() {
    this.setState({loading : true})
 
    service
      .detail(this.props.match.params.id)
      .then(response => {
        this.setState({ detail: response, loading:false })
     
      })
      .catch(err => console.log (err));
      //console.log(this.state.detail)
  }
  render() {
    return (
      <div className="details-body">
        {!this.state.loading && <div className="details">
              <section>
                <div className="card-position">
                  <section>
                    <img
                      className="logo-menu"
                      src="https://res.cloudinary.com/djkjuiyan/image/upload/v1558387997/imgs3P/logoTexto_qb6xcr.png"
                      alt="logo"
                    />
                  </section>
                   <h2 id="menu-detail">{this.state.detail.name}</h2>
                  <section className="recipe-card">
                    <div className="food-picture">
                      <img
                        src={this.state.detail.image}
                        alt="recipe"
                        width="120px"
                        height="120px"
                      />
                    </div>
                    <div className="recipe-description">
                      <div className="detail-position">
                        {this.state.detail.ingredientes.map((e, i) => {
                          return (
                            <div key={i} className="details-ingredients">
                              <p className="ingredient-name">{e.name}</p>
                              <p className="ingredient-quantity">{e.qty}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="chart">
                      <PieChart width={200} height={200}>
                        <Pie
                          data={data}
                          cx={100}
                          cy={100}
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      <div className="values">
                        <div className="single-value">
                          <div className="proteina" />
                          <p> Proteina</p>
                        </div>
                        <div className="single-value">
                          <div className="grasa" />
                          <p> Grasa</p>
                        </div>
                        <div className="single-value">
                          <div className="carbohidrato" />
                          <p> Carbohidrato</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
        </div> }
        <div className="sticky-menu">
          <BottomMenu />
        </div>
      </div>
    );
  }
}
