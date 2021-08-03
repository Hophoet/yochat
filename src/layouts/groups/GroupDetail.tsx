import React from 'react'
import { Dimensions, FlatList,  BackHandler, StyleSheet, StatusBar, View, Text, ActivityIndicator, TextInput, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import  {SET_AUTH_USER_TOKEN, SET_AUTH_USER} from '../../../src/redux/store/actions'
import {loginWithUsernameOrEmail} from '../../../src/backend/requests/auth';
import GroupMessagesItem from '../../components/groups/GroupMessagesItem'
import toasts from '../../../src/components/toasts'	
import {contacts, chats, notifications} from '../../data/data'
import GroupDetailHeader from '../../components/groups/GroupDetailHeader';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../assets/colors/main';


type Prop = {
	navigation:any,
	route:any,

}

type State = {
	group:any,

}

class  GroupDetail extends React.Component<Prop,State> { 

	_isMounted:boolean;
    constructor(props:Prop){
        super(props);
		this._isMounted = false;
		//state
        this.state = {
			group:this.props.route.params && this.props.route.params.group
        }
    }

	componentWillUnmount(){
		//clean up
		this._isMounted = false;
		console.log(this.props)
	}



   _customNav = () => {
        this.props.navigation.setOptions({
          header: () => (
            <GroupDetailHeader 
				title={this.state.group.name}
				isOnline={true}
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
		let group = this.state.group;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.main}/>
				<View style={styles.row1}>
					<FlatList
						showsVerticalScrollIndicator={false}
						data={group.messages}
						keyExtractor={(item)=>item.id.toString()}
						renderItem={({item, index}) => (
							<GroupMessagesItem
								item={item}
							/>
						)}
						ItemSeparatorComponent={()=><View style={styles.itemsSeparator}/>}

					/>

				</View>
				<View style={styles.row2}>
					<TouchableOpacity style={styles.iconButton}>
						<Icon size={30} name='share-outline' color='gray' />
					</TouchableOpacity>
					<TextInput
						placeholder='Type your message here..'
						style={styles.textInput}
					/>
					<TouchableOpacity style={styles.iconButton}>
						<Icon size={30} name='camera' color='gray' />
					</TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail)

const {width, height} = Dimensions.get('window');

//set screen styles
const styles = StyleSheet.create({
    container:{
        flex:1,
		backgroundColor:'white',
     
    },
	row1:{
		flex:1,
	},
	textInput:{
		flex:1,
		paddingHorizontal:10,
		paddingVertical:10,
		fontSize:12,
		borderRadius:90,
		borderWidth:2,
		borderColor:'gray',
	},
	row2:{
		flexDirection:'row',
		alignItems:'center',
		paddingHorizontal:20,
		paddingVertical:20,
		// backgroundColor:'aqua'
	},
	itemsSeparator:{
		paddingVertical:10,
	},
	title:{
		paddingVertical:5,
	},
	row3:{
		flexDirection:'row',
		justifyContent:'space-between',
		// backgroundColor:'aqua',
	},
	iconButton:{
		padding:10,
		// backgroundColor:'red',
		height:'100%'
		
	}


})
