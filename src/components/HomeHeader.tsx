
import React from 'react'
import { StyleSheet, View, Dimensions, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'






const HomeHeader = ({}:any) => {

	return(
		<View style={styles.container}>
			<View style={styles.row1}>
				<TouchableOpacity
					style={styles.iconButton}
				>
					<Icon  size={25} name='menu' color='gray' />
				</TouchableOpacity>
			</View>
			<View style={styles.row2}>
				<Image 
					style={styles.image}
					source={require('../assets/images/user.jpeg')}

				/>
			</View>
		</View>
	)
}

export default HomeHeader;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		//backgroundColor:'red',
		height:width/8,
		flexDirection:'row',
	},
	image:{
		width:40,
		height:40,
		borderRadius:10,
		margin:10,
	},
	row1:{
		flex:1,
		// backgroundColor:'red',
	},
	row2:{
		flex:1,
		flexDirection:'row',
		// backgroundColor:'blue',
		alignItems:'center',
		justifyContent:'flex-end',
	},
	iconButton:{
		// backgroundColor:'yellow',
		height:'100%',
		paddingHorizontal:10,
		marginLeft:5,
		justifyContent:'center',
	},
  	iconsContainer:{
      flex:8,
      justifyContent:'space-around',
      alignItems:'center',
      marginBottom:width/2
	},
	header:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	}
	})
