import React, { Component } from 'react'
import BottomMenu from "../bottom-menu/BottomMenu"
//import ChallengeList from "../JSON/Challenge.json"
import AppServices from "../../services/AppServices"
import { Card, Image, Placeholder } from 'semantic-ui-react';
import "./Challenge.css"

const service = new AppServices() 

export default class Challenge extends Component {
  state={
    challenge:[],
    loading:true
  }

  componentDidMount(){
    service
    .challenge()
    .then(response => this.setState({challenge: response}))
    .catch(err => err)
  }
  render() {
    const { loading } = this.state
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
    return (
      <div className="challenge-body">
        <div className="challenges-body">
        {this.state.challenge.map((e,i)=>{
          return <section key={i} className="challenge-card">
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
                    <span className='date'>duración:{e.duration}</span>
                  </Card.Meta>
                  <Card.Description>
                  <a href={e.link} target="_blanks">
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
