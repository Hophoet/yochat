import React, {useState} from 'react'
import {StyleSheet, View , Text, Dimensions, TouchableOpacity} from 'react-native'
import { colors } from '../../assets/colors/main'

const GroupsItem = ({item, width, height, navigate}:any) => {
  const [isFavorite, toggleFavorite] = useState(true);


	return(
		<View style={[styles.container]}>
			<TouchableOpacity
				style={styles.buttonContainer}	
				onPress={()=>{
					if(navigate){
						navigate('GroupDetail', {'group':item})
					}
				}}
			>
			<View style={styles.row1}>
				<View  
					style={styles.profileCircle}
				>
					<Text style={styles.letter}>{item.name[0]}</Text>
				</View>
			</View>
			<View style={styles.row2}>
				<Text style={styles.name}>{item.name}</Text>
				<Text style={styles.date}>{item.messages[item.messages.length - 1].text}</Text>
			</View>
			<View style={styles.row3}>
				<Text style={styles.date}>{item.messages[item.messages.length - 1].date}</Text>
				<View style={styles.circle}>
					<Text style={styles.circleLabel}>{item.messages.length}</Text>
				</View>
			</View>
			</TouchableOpacity>
		</View>
	)
}

export default GroupsItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
	},
	buttonContainer:{
		flexDirection:'row',

	},
	row1:{

		// backgroundColor:'aqua',
		justifyContent:'center',
		alignItems:'center',
	},
	row2:{
		flex:1,
		// backgroundColor:'red',
		justifyContent:'center',
		paddingHorizontal:10,

	},
	row3:{
		
		justifyContent:'center',
		alignItems:'center',
		// backgroundColor:'green',
	},
	followButton:{
		width:width/4,
		backgroundColor:colors.main,
		paddingVertical:10,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:3,
	},
	unFollowButton:{
		width:width/4,
		backgroundColor:'#1116',
		paddingVertical:10,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:3,
	},
	buttonLabel:{
		color:'white',
		fontWeight:'bold',
	},
	image:{
		width:width/7,
		height:width/7,
		borderRadius:90,
	},
	name:{
		fontWeight:'bold',
	},
	offline:{
		opacity:.5
	},
	online:{
		color:colors.main
	},
	date:{
		opacity:.5,
	},
	circle:{
		backgroundColor:'#79ff',
		height:30,
		width:30,
		borderRadius:90,
		justifyContent:'center',
		alignItems:'center',
	},
	circleLabel:{
		color:'white',
	},
	profileCircle: {
		backgroundColor:colors.main,
		width:width/8,
		height:width/8,
		borderRadius:90,
		justifyContent:'center',
		alignItems:'center',

	},
	letter:{
		color:'white',
		fontSize:20,
	}

	})
