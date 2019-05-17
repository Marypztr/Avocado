import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class Mainmenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu compact icon='labeled' vertical>
        <Menu.Item name='food' active={activeItem === 'food'} onClick={this.handleItemClick}>
          <Icon name='food' />
          Recipes
        </Menu.Item>

        <Menu.Item name='calendar alternate' active={activeItem === 'calendar alternate'} onClick={this.handleItemClick}>
          <Icon name='calendar alternate' />
          Retos semanales
        </Menu.Item>

        <Menu.Item name='heart' active={activeItem === 'heart'} onClick={this.handleItemClick}>
          <Icon name='heart' />
          Ejercicios
        </Menu.Item>

        <Menu.Item
          name='shopping basket'
          active={activeItem === 'shopping basket'}
          onClick={this.handleItemClick}
        >
          <Icon name='shopping basket' />
          Tiendas saludables
        </Menu.Item>

        <Menu.Item
          name='user circle'
          active={activeItem === 'user circle'}
          onClick={this.handleItemClick}
        >
          <Icon name='user circle' />
          Profile
        </Menu.Item>
      </Menu>
    )
  }
}
