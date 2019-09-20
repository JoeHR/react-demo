import React, { Component } from 'react'
import { Button, Row, Col, Card, Icon, Radio, Dropdown, Menu, message } from 'antd'
import CustomBreadcrumb from '../../../../components/CustomBreadcrumb'
import TypingCard from '../../../../components/TypingCard'

class AntdButtonDemo extends Component {

  state = {
    size: 'default'
  }

  handleSizeChange = (e) => {
    this.setState({
      size: e.target.value,
      loading: false,
      iconLoading: false
    })
  }

  handleMenuClick(e) {
    message.info(`Click on menu ${e.key} item.`)
  }

  render() {
    const { size, loading, iconLoading } = this.state
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2st item</Menu.Item>
        <Menu.Item key="3">3st item</Menu.Item>
      </Menu>
    )
    const cardContent = `标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。`
    return (
      <div>
        <CustomBreadcrumb arr={['Antd','基本', '按钮']} />
        <TypingCard source={cardContent} />

        <Row gutter={16}>

          <Col span={12}>

            <Card bordered={false} className='card-item'>
              <Button type='primary'>Primary</Button>&emsp;
              <Button>Default</Button>&emsp;
              <Button type='dashed'>Dashed</Button>&emsp;
              <Button type='danger'>Danger</Button>&emsp;
              <Button type='link'>Link</Button>
            </Card>

            <Card bordered={false} className='card-item'>
              <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="Default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <p style={{ marginTop: '1em' }}>
                <Button type="primary" size={size}>Primary</Button>&emsp;
                <Button size={this.state.size}>Default</Button>&emsp;
                <Button type="dashed" size={size}>Dashed</Button>&emsp;
                <Button type="danger" size={size}>Danger</Button>
                <Button type="link" size={size}>Link</Button>
              </p>
              <p>
                <Button shape='circle' type='primary' icon="download" size={size} />&emsp;
                <Button type="primary" icon="download" size={size}>Download</Button>
              </p>
              <div>
                <Button.Group size={size}>
                  <Button><Icon type="left" />Backward</Button>&emsp;
                  <Button>Forward<Icon type="right" /></Button>
                </Button.Group>
              </div>
            </Card>
            <Card bordered={false} className='card-item'>
              <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                <Button type="primary" ghost>Primary</Button>&emsp;
                <Button ghost>Default</Button>&emsp;
                <Button type="dashed" ghost>Dashed</Button>&emsp;
                <Button type="danger" ghost>danger</Button>&emsp;
                <Button type="link" ghost>link</Button>
              </div>
              <div>
              <TypingCard source={'幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。'} />
              </div>
            </Card>
          </Col>

          <Col span={12}>
            <Card bordered={false} className='card-item'>
              <p>
                <Button type="primary" shape="circle" icon="search" />&emsp;
                <Button type="primary" icon="search">Search</Button>&emsp;
                <Button shape="circle" icon="search" />&emsp;
                <Button icon="search">Search</Button>&emsp;
              </p>
              <p style={{ marginBottom: 0 }}>
                <Button shape="circle" icon="search" />&emsp;
                <Button icon="search">Search</Button>&emsp;
                <Button type="dashed" shape="circle" icon="search" />&emsp;
                <Button type="dashed" icon="search">Search</Button>
              </p>
            </Card>
            <Card bordered={false} className='card-item'>
              <Button type="primary">primary</Button>&emsp;
              <Button>secondary</Button>&emsp;
              <Dropdown overlay={menu}>
                <Button>Button<Icon type='down' /></Button>
              </Dropdown>
            </Card>
            <Card bordered={false} className='card-item'>
              <p>
                <Button loading type='primary'>Loading</Button>&emsp;
                <Button type='primary' loading shape='circle' />
              </p>
              <div>
                <Button loading={loading} onClick={() => this.setState({ loading: true })}>Click me</Button>&emsp;
                <Button loading={iconLoading} onClick={() => this.setState({ iconLoading: true })} icon='poweroff'>Click
                  me</Button>
              </div>
            </Card>
          </Col>

        </Row>

      </div>
    )
  }

}

export default AntdButtonDemo