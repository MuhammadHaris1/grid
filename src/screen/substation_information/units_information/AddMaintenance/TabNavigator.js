import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

import SiteInfo from './SiteInfo'
import Protocol from './Protocol'
import AttachDocument from '../../../visual_inspection/add/AttachDocument';

const Tabs = createMaterialTopTabNavigator(
    {
        'Site info': SiteInfo,
        'Protocol': Protocol,
        'ATTACHMENT': AttachDocument
    },
    {
        tabBarOptions: {
            scrollEnabled: true,
            activeTintColor: '#fff',
            inactiveTintColor: '#91B6FB',
            style: {
                backgroundColor: '#236CF6',
            },
            indicatorStyle: {
                backgroundColor: '#fff',
            },
            tabStyle: {
                height: 50,
                width: 140
            },
            labelStyle: {
                fontFamily: 'SF_Pro_Semibold',
                fontSize: 16
            }
        }
    })


export default createAppContainer(Tabs)