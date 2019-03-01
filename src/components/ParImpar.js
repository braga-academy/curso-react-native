import React from 'react'
import { View, Text } from 'react-native'

import Padrao from '../estilo/Padrao'

const parOuImpar = (num) => {
	const valor = num % 2 == 0 ? 'Par' : 'Impar'

	return <Text style={Padrao.ex}>{ valor }</Text>
}

export default props =>
	<View>
		{ parOuImpar(props.numero) }
	</View>