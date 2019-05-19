import React, { Component }from "react";
import BottomMenu from '../bottom-menu/BottomMenu';
import { PieChart, Pie, Cell} from 'recharts';
import './Recipedetail.css';
import  logo2  from '../../images/logoTexto.png';


const data = [
  { name: 'Proteina', value: 400 },
  { name: 'Grasa', value: 300 },
  { name: 'Carbohidratos', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);


  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Recipedetail extends Component {
  
  render() {
    return (
      <div>
        <div className="card-position">
          <section>
            <img className="logo-menu" src={logo2} alt="logo"/>
          </section>
          <h2>Title</h2>
          <section className="recipe-card">
            <div className="food-picture">
              <img src="https://amp.insider.com/images/5ad792ffbd967146008b45d9-960-720.jpg" alt="recipe" width="120px" height="120px"/>
            </div>
            <div className="recipe-description">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div  className="chart">
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
                  {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
              </PieChart>
              <div className="values">
              <div className="single-value">
                <div className="proteina"></div>
                <p>  Proteina</p>
              </div>
              <div className="single-value">
                <div className="grasa"></div>
                <p>  Grasa</p>
              </div>
              <div className="single-value">
                <div className="carbohidrato"></div>
                <p>  Carbohidrato</p>
              </div>
            </div>
            </div>
          </section>
        </div>
        <div className="sticky-menu">
          <BottomMenu/>
        </div>
      </div>
    )
  }
}