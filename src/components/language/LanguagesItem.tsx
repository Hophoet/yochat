import React, {useState} from 'react'
import {StyleSheet, View , Text, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../assets/colors/main'

const LanguagesItem = ({item, selectedLanguage, selectLanguage}:any) => {
  const [language, setLanguage] = useState(item);


	return(
		<View style={[styles.container]}>
			<TouchableOpacity
				style={styles.buttonContainer}	
				onPress={()=>{
					selectLanguage(item)
				}}
			>
				<View style={styles.row1}>
					<Icon name={(item == selectedLanguage)?'radio-button-on':'radio-button-off'} size={25} color={(item == selectedLanguage)?colors.main:'gray'} />
				</View>
				<View style={styles.row2}>
					<Text style={styles.date}>{language.name}</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default LanguagesItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
	},
	buttonContainer:{
		flexDirection:'row',

	},
	row1:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	row2:{
		flex:4,
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
	}

	})
