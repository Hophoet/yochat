
import React, {useState} from 'react'
import {Image, StyleSheet, View , Text, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../assets/colors/main'

const ChatMessagesItem = ({item, width, height, navigate}:any) => {
  const [isFavorite, toggleFavorite] = useState(true);


	return(
		<View style={styles.container}>
			<View 
				style={[styles.contentContainer,
					( item.sender)
					?{alignSelf:'flex-end'}
					:{alignSelf:'flex-start'},
					( item.sender )
					?styles.ownerMessageRadius
					:styles.notOwnerMessageRadius,
					( item.sender )
					?{backgroundColor:colors.main}
					:{backgroundColor:'white'}
					]}>
						{ item.image &&
							<View 
								style={styles.commandProductImageContainer}
								>
								<Image
									style={styles.commandProductImage}
									resizeMode='cover'
									source={item.image}
								/>
							</View>

						}

					<Text style={[(item.sender)?styles.notSenderText:styles.senderText]}>{(item && item.text)?item.text:'message'}</Text>
					<View style={styles.dateContainer}>
						<Icon name='checkmark-done' color={(item.sender)?'white':'black'} size={12}/>
						<Text style={[(item.sender)?styles.notSenderDate:styles.senderDate]}>{item.date}</Text>
						
					</View>
			</View>
		</View>
	)
}

export default ChatMessagesItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
		paddingVertical:10,
    },
	contentContainer:{
		padding:20,
		maxWidth:width/2,
		maxHeight:width/1.5,
	},
	ownerMessageRadius:{
		elevation:5,
		borderTopRightRadius:10,
		borderTopLeftRadius:10,
		borderBottomLeftRadius:10,
		marginRight:10,
	},
	notOwnerMessageRadius:{
		elevation:5,
		borderTopRightRadius:10,
		borderTopLeftRadius:10,
		borderBottomRightRadius:10,
		marginLeft:10,
	},
	senderText:{
		color:'black',
	},
	notSenderText:{
		color:'white',
	},
	senderDate:{
		fontSize:10,
		opacity:.8,
		color:'gray',
		paddingHorizontal:10,
		
	},
	notSenderDate:{
		fontSize:10,
		opacity:.8,
		paddingHorizontal:10,
		color:'white',
		
	},
	commandProductImageContainer:{
		flex:1,
		paddingVertical:10,
		//backgroundColor:'red',
		alignItems:'center',
		justifyContent:'center',
	},
	commandProductImage:{
		//width:width/3,
		padding:10,
		borderRadius:10,
		height:width/2.5,//'100%',//width/3,
		width:width/2,//width/3,
		marginVertical:10,
	},
	dateContainer:{
		flexDirection:'row'

	}
})
