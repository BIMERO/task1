import React, { useState } from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';

// const items: MenuProps['items'] = [
//   {
//     label: 'Program details',
//     key: 'mail',
//   },
//   {
//     label: 'Application',
//     key: 'app',
//   },
//   {
//     label: 'Workflow',
//     key: '3',
//   },
//   {
//     label: 'Preview',
//     key: '4',
//   },
// ];

export const Navbar = () => {
  // const [current, setCurrent] = useState('app');
  
  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  //   setCurrent(e.key);
  // };

  return (
    <Header // Header Component
      style={{
        zIndex: 1,
        width: "100%",
        }}
        >
        <div className="logo" />
        <Menu // Header Tabs
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["application"]}
        >
          <Menu.Item key="1" style={{ color: "#ffffff" }}>
            Program details
          </Menu.Item>
          <Menu.Item key="application" style={{ color: "#ffffff" }}>
            Application details
          </Menu.Item>
          <Menu.Item key="getADemo" style={{ color: "#ffffff" }}>
            Workflow
          </Menu.Item>
          <Menu.Item key="getADemo" style={{ color: "#ffffff" }}>
            Preview
          </Menu.Item>
        </Menu>
      </Header>
  )
}
