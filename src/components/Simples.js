import React from 'react'

import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

export default props =>
	<View style={Padrao.container}>
		<Text style={Padrao.ex}>Arrow: { props.texto }</Text>
	</View>