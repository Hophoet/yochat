import React, {useState} from 'react'
import {Image, StyleSheet, View , Text, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../assets/colors/main'

const PostsItem = ({item, width, height, navigate}:any) => {
  const [isFavorite, toggleFavorite] = useState(true);


	return(
		<View style={[styles.container]}>
			<View style={styles.row1}>
				<TouchableOpacity 
					onPress={()=> navigate('Profile')}
				style={styles.row1Row1}>
					<Image 
						source={item.user.image}
						style={styles.userImage}
					/>
					<Text style={styles.username}>{item.user.name}</Text>
				</TouchableOpacity>
				<View style={styles.row1Row2}>
					<Text style={styles.date}>{item.date} 23 min</Text>
				</View>
			</View>
			<View style={styles.row2}>
				<Text style={styles.postText}>{item.text}</Text>
			</View>
				{ item.image &&
			<View style={styles.row3}>
				<Image 
					source={item.image}
					style={styles.postImage}
				/>
			</View>
				}
			<View style={styles.row4}>
				<View style={styles.row3Column1}>
					<TouchableOpacity style={styles.iconButton}>
						<Icon name='heart-outline' color={'gray'} size={25}/>
						<Text style={styles.iconLabel}>{item.like}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconButton}>
						<Icon name='chatbox-outline' color={'gray'} size={25}/>
						<Text style={styles.iconLabel}>{item.comment}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconButton}>
						<Icon name='share-outline' color={'gray'} size={25}/>
						<Text style={styles.iconLabel}>{item.share}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row3Column2}>
					<TouchableOpacity style={[styles.iconButton, {paddingRight:0}]}>
						<Icon name='eye-outline' color={'gray'} size={25}/>
						<Text style={styles.iconLabel}>{item.like}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default PostsItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
	},
	row1:{
		flex:1,
		flexDirection:'row',
		// backgroundColor:'aqua',
		justifyContent:'space-between',
		alignItems:'center',
	},
	row1Row1:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	row2:{
		flex:1,
		// backgroundColor:'red',
		justifyContent:'center',
		paddingVertical:10,

	},
	row3:{
		paddingBottom:10,
	},
	row4:{
		flexDirection:'row',
		justifyContent:'space-between',
	},
	row3Column1:{
		flexDirection:'row',
	},
	iconButton:{
		flexDirection:'row',
		paddingRight:20,
		justifyContent:'center',
		alignItems:'center',
	},
	iconLabel:{
		paddingLeft:5,
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
	userImage:{
		width:width/7,
		height:width/7,
		borderRadius:90,
	},
	postImage:{
		// width:width/7,
		height:width/1.5,
	},
	username:{
		fontWeight:'bold',
		paddingHorizontal:10,
	},
	postName:{

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
	

	})
