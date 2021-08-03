import React,{useEffect} from 'react';
import {View, Dimensions, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../../assets/colors/main'

const ChatDetailHeader = (
		{
			title,
			isOnline,
			description,
			firstAction,
		}:any) => {

    useEffect(() => {
    }, [])

    return(
        <View style={styles.container}>
			<View style={styles.row1}>
				<TouchableOpacity
					onPress={firstAction}	
				>
					<Icon name='arrow-back' color={'black'} size={25}/>
				</TouchableOpacity>
			</View>
			<View style={styles.row2}>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.row2Row2}>
				</View>
			</View>
			<View style={styles.row3}>
				<View style={styles.row3Content}>
					<Text style={styles.letter}>{title[0]}</Text>
				</View>
			</View>
        </View>
    );
}

export default ChatDetailHeader;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
		backgroundColor:'white',
		flexDirection:'row',
		height:width/7,
		elevation:10,
		justifyContent:'space-between',
		paddingHorizontal:20,
	
    },
	row1:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		// backgroundColor:'blue',
	},
	row2:{
		paddingHorizontal:10,
		alignItems:'center',
		justifyContent:'center',
		// backgroundColor:'green',
	},
	row2Row2:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	row3:{
		justifyContent:'center',
		alignItems:'center',

	},
	textInput:{
		fontSize:12,
		borderRadius:90,
		borderWidth:3,
		borderColor:'gray',
	},
	title:{
		color:'black',
		fontWeight:'bold',
	},
	dot:{
		marginHorizontal:5,
		backgroundColor:colors.main,
		width:8,
		height:8,
		borderRadius:90,
	},
	online:{
		marginHorizontal:5,
		fontSize:12,
		color:'gray',
	},
	row3Content:{
		backgroundColor:colors.main,
		height:width/9,
		width:width/9,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:90,
	},
	letter:{
		color:'white',
		fontSize:20,
	}
})
