import React,{useEffect} from 'react';
import {View, Dimensions, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../../assets/colors/main'

const SelectLanguageHeader = (
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
					<Icon name='arrow-back' color={'white'} size={25}/>
				</TouchableOpacity>
			</View>
			<View style={styles.row2}>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.row2Row2}>
				</View>
			</View>
			<View style={styles.row3}>
				<View style={styles.row3Content}>
					{/* <Text style={styles.letter}>{'kdfjl'}</Text> */}
				</View>
			</View>
        </View>
    );
}
export default SelectLanguageHeader;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
		backgroundColor:colors.main,
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
	title:{
		color:'white',
		fontSize:20,
		fontWeight:'bold',
	},
})
