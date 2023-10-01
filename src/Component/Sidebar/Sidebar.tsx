import React from 'react'
import {Avatar, Menu} from 'antd'
import { UserOutlined, SettingOutlined, HomeOutlined, MenuOutlined, FileAddFilled } from '@ant-design/icons';


export const Sidebar = () => {
  return (
    <section className='w-28 h-screen relative'>
        <Menu className='fixed h-full w-28 p-6 flex flex-col gap-6 items-center'>
            <Menu.Item style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} key="/">
                <MenuOutlined/>
            </Menu.Item>
            
            <Menu.Item style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} key="1">
                <HomeOutlined/>
            </Menu.Item>

            <Menu.Item style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} key="2">
                <FileAddFilled/>
            </Menu.Item>
        </Menu>

        <Menu className='absolute w-full gap-6 text-center bottom-0'>
            <Menu.Item key="5">
                <SettingOutlined size={24}/>
            </Menu.Item>
            <Menu.Item key="6">
                <Avatar shape="square" size="small" icon={<UserOutlined />} />
            </Menu.Item>
        </Menu>
    </section>
  )
}