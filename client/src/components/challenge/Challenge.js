import React, { Component } from 'react'
import BottomMenu from "../bottom-menu/BottomMenu"
import ChallengeList from "../JSON/Challenge.json"
import { Card, Image, Placeholder } from 'semantic-ui-react';
import "./Challenge.css"


export default class Challenge extends Component {
  state={
    challenges:[],
    loading:true
  }
  render() {
    const { loading } = this.state
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
    return (
      <div className="challenge-body">
        <div className="challenges">
        {ChallengeList.map((e,i)=>{
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
