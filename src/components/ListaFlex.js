import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
	{ id: 1, nome: 'Bia', nota: 9.9},
	{ id: 2, nome: 'Andreza', nota: 7.9},
	{ id: 3, nome: 'Claudia', nota: 7.9},
	{ id: 4, nome: 'Juliana', nota: 7.9},
	{ id: 5, nome: 'Mauricio', nota: 7.9},
	{ id: 6, nome: 'Pedro', nota: 7.9},
	{ id: 7, nome: 'Joana', nota: 7.9},
	{ id: 8, nome: 'Cataria', nota: 7.9},
	{ id: 9, nome: 'Maria', nota: 7.9},
	{ id: 10, nome: 'Bia', nota: 9.9},
	{ id: 11, nome: 'Bia', nota: 9.9},
	{ id: 12, nome: 'Andreza', nota: 7.9},
	{ id: 13, nome: 'Claudia', nota: 7.9},
	{ id: 14, nome: 'Juliana', nota: 7.9},
	{ id: 15, nome: 'Mauricio', nota: 7.9},
	{ id: 16, nome: 'Pedro', nota: 7.9},
	{ id: 17, nome: 'Joana', nota: 7.9},
	{ id: 18, nome: 'Cataria', nota: 7.9},
	{ id: 19, nome: 'Maria', nota: 7.9},
]

const itemEstilo = {
	paddingHorizontal: 15,
	height: 70,
	backgroundColor: '#eee',
	borderWidth: 0.5,
	borderColor: '#ccc',

	// Flex
	// justifyContent: 'center'
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'space-between'
}

export const Aluno = props =>
	<View style={ itemEstilo }>
		<Text>Nome: {props.nome}</Text>
		<Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
	</View>

export default props => {
	const renderItem = ({ item }) => {
		return <Aluno {...item} />
	}

	return (
		<ScrollView>
			<FlatList
				data={alunos}
				renderItem={renderItem}
				keyExtractor={(_, index) => index.toString()}/>
		</ScrollView>
	)
}