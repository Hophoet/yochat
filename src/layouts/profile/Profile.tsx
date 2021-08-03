import React from 'react'
import { ScrollView, Image, Dimensions, StyleSheet, StatusBar, View, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { colors } from '../../assets/colors/main'
import ProfileHeader from '../../components/profile/ProfileHeader';
import Icon from 'react-native-vector-icons/Ionicons'

type Prop = {
	navigation:any,
}

type State = {
}

class  Profile extends React.Component<Prop,State> { 

	_isMounted:boolean;
    constructor(props:Prop){
        super(props);
		this._isMounted = false;
		//state
        this.state = {
        }
    }

	componentWillUnmount(){
		//clean up
		this._isMounted = false;
	}



   _customNav = () => {
        this.props.navigation.setOptions({
          header: () => (
            <ProfileHeader 
				firstAction={this.props.navigation.goBack}	
				// firstActionIcon='close'
			/>
          ),
        });
    }

	componentDidMount(){
		// Set the component state 
		this._isMounted = true;
		this._customNav();
	}

 
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.main}/>
				<View style={styles.row1}>
					<View style={styles.row1Row1}>
						<Image
							style={styles.image}
							resizeMode='cover'
							source={require('../../assets/images/user.jpeg')}
						/>
						<Text style={styles.username}>@dark_perter</Text>
						<Text style={styles.description}>Designer an Coffe lover</Text>
					</View>
					<View style={styles.row1Row2}>
						<TouchableOpacity style={styles.button}>
							<Icon name='add' size={20} color='white' />
						</TouchableOpacity>
						<TouchableOpacity style={styles.button}>
							<Icon name='chatbox-outline' size={20}  color='white' />
						</TouchableOpacity>
						<TouchableOpacity style={styles.button}>
							<Icon name='menu' size={20}  color='white' />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.row2}>
					<View style={styles.row2Row1}>
						<View style={styles.row2Row1Content}>
							<Text style={styles.row2Row1ContentTitle}>Followers</Text>
							<Text style={styles.row2Row1ContentValue}>640</Text>
						</View>
						<View style={styles.row2Row1Content}>
							<Text style={styles.row2Row1ContentTitle}>Following</Text>
							<Text style={styles.row2Row1ContentValue}>340</Text>
						</View>
						<View style={styles.row2Row1Content}>
							<Text style={styles.row2Row1ContentTitle}>Likes</Text>
							<Text style={styles.row2Row1ContentValue}>890</Text>
						</View>
					</View>
					<View style={styles.row2Row2}>

						<View style={styles.row2Row2TitleContainer}>
							<Text style={styles.row2Row2Title}>Information</Text>
						</View>
						<ScrollView showsVerticalScrollIndicator={false} style={styles.row2ScrollView} >
							<View style={{flex:1}}>

							<TouchableOpacity style={styles.actionButton}>
								<Icon name='home' color={colors.main} size={30}/>
								<View style={styles.actionButtonRow2}>
									<Text style={styles.actionButtonTitle}>Address</Text>
									<Text style={styles.actionButtonDescription}>New Youk, USA</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={styles.actionButton}>
								<Icon name='mail-outline' color={'yellow'} size={25}/>
								<View style={styles.actionButtonRow2}>
									<Text style={styles.actionButtonTitle}>E-mail</Text>
									<Text style={styles.actionButtonDescription}> darkpeter@gmail.com</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={styles.actionButton}>
								<Icon name='heart' color={'red'} size={25}/>
								<View style={styles.actionButtonRow2}>
									<Text style={styles.actionButtonTitle}>Relationship</Text>
									<Text style={styles.actionButtonDescription}>Married</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={styles.actionButton}>
								<Icon name='people' color={'green'} size={25}/>
								<View style={styles.actionButtonRow2}>
									<Text style={styles.actionButtonTitle}>Team</Text>
									<Text style={styles.actionButtonDescription}>Quadro Design Team</Text>
								</View>
							</TouchableOpacity>
							</View>
						</ScrollView>
					</View>
				</View>
			</View>
				)
			}


}

//maps with the state global
const mapDispatchToProps = (dispatch:Function) => {
    return {
        dispatch: (action:any) => {dispatch(action)}
    }
}
const mapStateToProps = (state:any) => {
    return {
		authUserToken:state.authUserToken,
		authUser:state.authUser,
		presentationRead:state.presentationRead
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const {width, height} = Dimensions.get('window');

//set screen styles
const styles = StyleSheet.create({
    container:{
        flex:1,
		backgroundColor:'white',
     
    },
	row1:{
		backgroundColor:colors.main,
		height:height/2.3,
	},
	row1Row1:{
		flex:2,
		alignItems:'center',
		justifyContent:'center',
	},
	row1Row2:{
		flex:1,
		flexDirection:'row',
		justifyContent:'space-around',
		paddingHorizontal:width/4,
		
	},
	row2:{
		height:height/2,
	},
	row2Row1:{
		flex:1,
		flexDirection:'row',
		justifyContent:'space-around',
		backgroundColor:'white',
		marginHorizontal:20,
		height:width/5,
		borderRadius:5,
		elevation:5,
		top:-25,
	},
	row2Row1Content:{
		justifyContent:'center',
		alignItems:'center',
	},
	
	row2Row1ContentTitle:{
		color:'gray',
	},
	row2Row1ContentValue:{
		fontWeight:'bold',
	},
	itemsSeparator:{
		paddingVertical:10,
	},
	title:{
		paddingVertical:5,
	},
	image:{
		width:width/3,
		height:width/3,
		borderRadius:80,
	},
	username:{
		color:'white',
		// fontSize:20,
		paddingBottom:5,
	},
	description:{
		color:'white',
		// fontSize:20,
		paddingBottom:5,
	},
	button:{
		backgroundColor:colors.main,
		elevation:10,
		width:width/9,
		height:width/9,
		borderRadius:90,
		justifyContent:'center',
		alignItems:'center',
	},
	row2Row2:{
		flex:4,
		marginHorizontal:20,
		borderRadius:5,
		elevation:5,
		padding:5,
		backgroundColor:'white',
	},
	row2Row2Title:{
		fontWeight:'bold',
		paddingVertical:5,
		fontSize:17,
	},
	actionButton:{
		flexDirection:'row',
		flex:1,
		alignItems:'center',
		// backgroundColor:'red',
	},
	actionButtonRow2:{
		paddingLeft:20,
	},
	actionButtonTitle:{
	},
	actionButtonDescription:{
		color:'gray',
		fontSize:12,
	},
	row2ScrollView:{
		paddingTop:10,
	},
	row2Row2TitleContainer:{
		borderBottomColor:'gray',
		borderBottomWidth:StyleSheet.hairlineWidth,
}


})
