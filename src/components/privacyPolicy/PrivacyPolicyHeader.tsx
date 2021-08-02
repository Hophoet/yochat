import React,{useEffect} from 'react';
import {View, Dimensions, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../../assets/colors/main'

const PrivacyPolicyHeader = (
		{
			title,
			firstAction,
			description
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
				<Text style={styles.title}>Privacy Policy</Text>
			</View>
        </View>
    );
    
}
export default PrivacyPolicyHeader;


const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
		backgroundColor:colors.main,
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
	title:{
		paddingHorizontal:10,
		fontSize:20,
		color:'white',
	}
})
