import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'

export default DrawerNavigator({
	MegaSena: {
		screen: () => <MegaSena numeros={8} />,
		navigationOptions: { title: 'Mega Sena' }
	},
	Inverter: {
		screen: () => <Inverter texto='React' />
	},
	ParImpar: {
		screen: () => <ParImpar numero={3} />
	},
	Simples: {
		screen: () => <Simples texto='Simples' />
	}
}, { drawerWidth: 300 })