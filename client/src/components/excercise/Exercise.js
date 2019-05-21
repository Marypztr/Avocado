import React, { Component } from 'react';
import BottomMenu from '../bottom-menu/BottomMenu';
import xcercise from '../JSON/Ejercicios.json';
import { Card, Image, Placeholder } from 'semantic-ui-react';
import './Exercise.css';


export default class Excercise extends Component {

  state = {
    stores:[],
    loading: true
  }
  
  render() {
    const { loading } = this.state
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
    return (
      <div className="stores-body">
        <div className="stores">
        {xcercise.map((e,i)=>{
          return <section className="store-card">
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
                    <span className='date'>{e.level}</span>
                  </Card.Meta>
                  <Card.Description>
                  <a href={e.video} target="_blanks">
                  <button className="button-video">Entrar</button>
                  </a>
                  </Card.Description>
                  </div>
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
