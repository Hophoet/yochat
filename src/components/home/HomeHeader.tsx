import React,{useEffect} from 'react';
import {View, Dimensions, TextInput, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../../assets/colors/main'

const HomeHeader = (
		{
			title,
			description
		}:any) => {

    useEffect(() => {
    }, [])

    return(
        <View style={styles.container}>
			<View style={styles.row1}>
				<Icon name='add' color={colors.main} size={25}/>
			</View>
			<View style={styles.row2}>
				<Icon name='search' color={'gray'} size={25}/>
				<TextInput 
					placeholderTextColor='black'
					placeholder='SEARCH CONTACTS'
					style={styles.textInput}
				/>
			</View>
			<View style={styles.row3}>
				<Icon name='menu' color={colors.main} size={25}/>
			</View>
        </View>
    );
}

export default HomeHeader;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
		backgroundColor:'white',
		flexDirection:'row',
		height:width/7,
		elevation:10,
		paddingHorizontal:20,
	
    },
	row1:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		// backgroundColor:'blue',
	},
	row2:{
		flex:3,
		paddingHorizontal:10,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		// backgroundColor:'green',
	},
	row3:{
		flex:1,
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
