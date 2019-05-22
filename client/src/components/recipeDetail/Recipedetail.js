import React, { Component }from "react";
import BottomMenu from '../bottom-menu/BottomMenu';
import { PieChart, Pie, Cell} from 'recharts';
import './Recipedetail.css';
import Recipe from "../../components/JSON/Recetas"
// import  logo2  from '../../../public/images/logoTexto.png';


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
  state ={
    details:[]
    
  }
  render() {
    return (
      <div className="details-body">
      <div className="details">
      {Recipe.map((e,i)=>{
        return <section>
        <div className="card-position">
          <section>
            <img className="logo-menu" src="https://res.cloudinary.com/djkjuiyan/image/upload/v1558387997/imgs3P/logoTexto_qb6xcr.png" alt="logo"/>
          </section>
          <h2>{e.name}</h2>
          <section className="recipe-card">
            <div className="food-picture"> 
              <img src={e.image} alt="recipe" width="120px" height="120px"/>
            </div>
            <div className="recipe-description">
              <div className="detail-position">{e.ingredientes.map((e,i)=>{
                return <div className="details-ingredients">
                <p className="ingredient-name">{e.name}</p>
                <p className="ingredient-quantity">{e.qty}</p>
                </div>
              })}</div>
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
        </section>
        })}
        </div>
        <div className="sticky-menu">
          <BottomMenu/>
        </div>
      </div>
    )
  }
}