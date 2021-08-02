import React,{useEffect} from 'react';
import {View, Dimensions, TextInput, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../../assets/colors/main'

const ContactsHeader = (
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
        </View>
    );

    
}

export default ContactsHeader;


const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
		backgroundColor:'white',
		flexDirection:'row',
		height:width/7,
		elevation:10,
	
    },
	row1:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		// backgroundColor:'blue',
	},
	row2:{
		paddingHorizontal:10,
		flexDirection:'row',
		alignItems:'center',
		// backgroundColor:'green',
		flex:4,
	},
	textInput:{
		paddingHorizontal:10,
		fontSize:12,
	}
})
