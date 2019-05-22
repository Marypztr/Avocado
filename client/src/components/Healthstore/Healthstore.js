import React, { Component } from 'react';
import BottomMenu from '../bottom-menu/BottomMenu';
//import HealthstoreList from '../JSON/Heatlhstore.json';
import { Card, Image, Rating, Placeholder } from 'semantic-ui-react';
import './Healthstore.css';
import AppServices from "../../services/AppServices"

const service = new AppServices()

export default class Healthstore extends Component {

  state = {
    healthstore:[],
    loading: true
  } 

  componentDidMount(){
    service
    .healthstore()
    .then(response => this.setState({healthstore: response}))
    .catch(err => err)
  }
  
  render() {
    const { loading } = this.state
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
    return (
      <div className="stores-body">
        <div className="stores">
        {this.state.healthstore.map((e,i)=>{
          return <section key={i}  className="store-card">
            <Card>
            {loading ? (
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            ) : (
              <Image src={e.image} wrapped ui={false} />
            )}
              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <div>
                  <Card.Header className="challenge-name">{e.name}</Card.Header>
                  <Card.Meta className="duration-challenge">
                    <span className='date'>{e.phone}</span>
                  </Card.Meta>
                  <Card.Description>
                    
                  <a href={e.site} target="_blanks">
                  <button className="button-video">Entrar</button>
                  </a>
                  </Card.Description>
                  </div>
                )}
              </Card.Content>
              <Card.Content extra>
                {!loading ? (
                <div >
                  <Rating className="stars" icon='star' defaultRating={3} maxRating={4} />
                </div>
                ):(
                  <div></div>
                )}     
              </Card.Content>
            </Card>
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
