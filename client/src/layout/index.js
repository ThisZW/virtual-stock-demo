import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkUser } from '../actions'
import { Layout, Menu } from 'antd'
import Routes from '../router'
import {  BrowserRouter as Router, Link } from 'react-router-dom'

const { Header, Footer, Content } = Layout

const styles = {
  title: {
    marginRight: "30px",
    display: "inline-block",
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#fff",
    float: "left",
  },
  user: {
    float: "right",
  },
  header: {
    padding: "0 150px"
  },
  contentContainer: {
    margin: "30px 150px",
    padding: "20px 40px",
    background: "#fff",
    minHeight: 300
  }
}

class AppLayout extends Component{
  
  constructor(){
    super()
    this.state = this.props
  }

  componentDidMount(){
    this.props.checkUser()
  }

  componentWillReceiveProps(props){
    this.setState = {...props}
  }

  render() {
    console.log('state and props', this.state, this.props)
    return (
      <Layout className="layout">
        <Router>
          <Header style={styles.header}> 
            <div style={styles.title}>Stock Demo</div>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="portfolio">Portfolio<Link to="/"/></Menu.Item>
              <Menu.Item key="transactions">Transactions<Link to="/transactions" /></Menu.Item>
              {this.props.isLoggedIn ?[
                  <Menu.Item style={styles.user} key="register">Register <Link to="/register" /></Menu.Item>,
                  <Menu.Item style={styles.user} key="login">Login <Link to="/login" /></Menu.Item>
                ]:[
                  <Menu.Item style={styles.user} key="Welcome">Welcome! {this.state.name} </Menu.Item>,
                ]
              }
            </Menu>
          </Header>
          <Content>
            <div style={styles.contentContainer}>
              <Routes/>
            </div>
          </Content>
        </Router>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.user.user
})

export default connect(
  mapStateToProps, 
  { checkUser }
)(AppLayout)