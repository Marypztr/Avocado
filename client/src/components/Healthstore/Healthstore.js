import React, { Component } from 'react';
import BottomMenu from '../bottom-menu/BottomMenu';
import HealthstoreList from '../JSON/Heatlhstore.json';
import { Card, Image, Rating, Placeholder, Fragment } from 'semantic-ui-react';
import './Healthstore.css';

export default class Healthstore extends Component {

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
        {HealthstoreList.map((e,i)=>{
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
                  <Card.Header>{e.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{e.phone}</span>
                  </Card.Meta>
                  <Card.Description>
                    {e.site}
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
