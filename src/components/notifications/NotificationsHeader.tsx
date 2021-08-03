import React,{useEffect} from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../../assets/colors/main'

const NotificationsHeader = (
		{
			title,
			description
		}:any) => {

    useEffect(() => {
    }, [])

    return(
        <View style={styles.container}>
			<View style={styles.row1}>
				<Icon name='heart-outline' color={colors.main} size={25}/>
			</View>
			<View style={styles.row2}>
				<Text style={styles.title}>Notifications</Text>
			</View>
			<View style={styles.row3}>
				<Icon name='menu' color={colors.main} size={25}/>
			</View>
        </View>
    );

    
}

export default NotificationsHeader;
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
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		// backgroundColor:'green',
	},
	row3:{
		justifyContent:'center',
		alignItems:'center',

	},
	textInput:{
		paddingHorizontal:10,
		fontSize:12,
	},
	title:{
		color:'black',
	}
})
