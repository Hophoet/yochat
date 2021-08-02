
import React, {useState} from 'react'
import {Image, StyleSheet, View , Text, Dimensions, TouchableOpacity} from 'react-native'
import { colors } from '../../assets/colors/main'

const ContactsItem = ({item, width, height, navigate}:any) => {
  const [isFavorite, toggleFavorite] = useState(true);
  const [contact, setContact] = useState(item);

  const toggleFollow = () => {
	  let _contact = {...contact};
	  _contact.followed = ! _contact.followed;
	  setContact(_contact)

  }

	return(
		<View style={[styles.container]}>
			<TouchableOpacity 
				onPress={()=> navigate('Profile')}
				style={styles.row1}>
				<Image 
					source={item.image}
					style={styles.image}
				/>
			</TouchableOpacity>
			<View style={styles.row2}>
				<Text style={styles.name}>{contact.name}</Text>
				<Text style={[(contact.online)?styles.online:styles.offline]}>{(item.followed)?'online':'offline'}</Text>
			</View>
			<View style={styles.row3}>
				<TouchableOpacity
					onPress={toggleFollow}
					style={[(contact.followed)?styles.followButton:styles.unFollowButton]}
				>
					<Text style={styles.buttonLabel}>{(contact.followed)?'Follow':'Unfollow'}</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default ContactsItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
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
	}

	})
