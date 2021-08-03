import React from 'react'
import { Dimensions, FlatList, StyleSheet, StatusBar, View, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { colors } from '../../assets/colors/main'
import ProfileHeader from '../../components/profile/ProfileHeader';
import ActionButtonsItem from '../../components/user/ActionButtonsItem';

import Icon from 'react-native-vector-icons/Ionicons'

type Prop = {
	navigation:any,


}

type State = {

}

class  User extends React.Component<Prop,State> { 

	_isMounted:boolean;
	profileActions:any[];
    constructor(props:Prop){
        super(props);
		this._isMounted = false;
		//state
        this.state = {
        }
		this.profileActions = [
			{id:2, icon:'language', title:'Language', action:()=>this.goTo('SelectLanguage')},
			{id:3, icon:'trash-outline', title:'Delete account & all data' , action:()=>this.goTo('DeleteAccount')},
			{id:4, icon:'log-out-outline', title:'Log Out', action:()=>this.goTo('Auth')},
		]
    }

	goTo = (screen:string) => {
		this.props.navigation.navigate(screen);

	}

	componentWillUnmount(){
		//clean up
		this._isMounted = false;
	}

   _customNav = () => {
        this.props.navigation.setOptions({
          header: () => (
            <ProfileHeader 
				// firstAction={this.closeAuth}	
				// firstActionIcon='close'
			/>
          ),
        });
    }

	componentDidMount(){
		// Set the component state 
		this._isMounted = true;
		// this._customNav();
		// Add event listener to exit the back when the user press the device back button 
		this.props.navigation.addListener('beforeRemove', (e:any) => {
			//exit the app when the back button is press
			if(e.data.action.type == 'GO_BACK'){
		 		// e.preventDefault();
				// // exit the app if the presentation was read
				// BackHandler.exitApp();
			}
		 });
	
	}


 
    //components rending method
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.main}/>
				<View style={styles.row1}>
					<View style={styles.row1Column1}>
						<TouchableOpacity style={styles.userCircle}>
							<Text style={styles.userLetter}>s</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.row1Column2}>
						<Text style={styles.username}>Jimmy Daytona</Text>
						<Text style={styles.email}>Jimmy Daytona</Text>
					</View>
				</View>
				<View style={styles.row2}>
					<TouchableOpacity style={styles.editButton}>
						<Icon name='pencil' color='white' size={20}/>
					</TouchableOpacity>
					<View style={styles.aboutContainer}>
						<Text style={styles.aboutLabel}>ABOUT</Text>
						<Text style={styles.aboutDescription}>i love react native a lot!</Text>
					</View>
					<View style={styles.actionsContainer}>
						<Text style={styles.actionsTitle}>SETTINGS</Text>
						<FlatList
							data={this.profileActions}
							keyExtractor={(item) =>item.id.toString()}
							ItemSeparatorComponent={() =><View style={styles.actionButtonSeparator}/>}
							renderItem={({item,index}) => (
								<ActionButtonsItem item={item}/>
							)}
						/>

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

export default connect(mapStateToProps, mapDispatchToProps)(User)

const {width, height} = Dimensions.get('window');

//set screen styles
const styles = StyleSheet.create({
    container:{
        flex:1,
		backgroundColor:'white',
     
    },
	row1:{
		flex:1,
		flexDirection:'row',
		paddingHorizontal:20,
		backgroundColor:colors.main,
	},
	row1Column1:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	row1Column2:{
		flex:3,
		paddingLeft:20,
		// backgroundColor:'green',
		justifyContent:'center',
	},
	row2:{
		flex:3,
	},
	userCircle:{
		width:width/4.5,
		height:width/4.5,
		backgroundColor:'#111b',
		borderRadius:90,
		justifyContent:'center',
		alignItems:'center',
	},
	userLetter:{
		fontSize:30,
		color:'gray',
	},
	username:{
		color:'white',
		fontSize:30,
	},
	email:{
		color:'white',
	},
	editButton:{
		backgroundColor:colors.main,
		alignSelf:'flex-end',
		width:width/7,
		height:width/7,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:90,
		top:- width/14,
		elevation:10,
		marginRight:20,
	},
	aboutLabel:{
		fontSize:12,
	},
	aboutContainer:{
		// backgroundColor:'red',
		paddingHorizontal:20,
	},
	actionButtonSeparator:{
		padding:20,
	},
	actionsTitle:{
		fontSize:12,
		paddingVertical:20,
	},
	actionsContainer:{
		paddingHorizontal:20,
	}

})
