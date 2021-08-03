import React from 'react'
import { Dimensions, FlatList, StyleSheet, StatusBar, View, TextInput, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import ChatMessagesItem from '../../components/chats/ChatMessagesItem'
import ChatDetailHeader from '../../components/chats/ChatDetailHeader';
import { colors } from '../../assets/colors/main'
import Icon from 'react-native-vector-icons/Ionicons'


type Prop = {
	navigation:any,
	route:any,
}

type State = {
	chat:any,

}

class  ChatDetail extends React.Component<Prop,State> { 

	_isMounted:boolean;
    constructor(props:Prop){
        super(props);
		this._isMounted = false;
		//state
        this.state = {
			chat:this.props.route.params && this.props.route.params.chat
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
            <ChatDetailHeader 
				title={this.state.chat.user.name}
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
		let chat = this.state.chat;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.main}/>
				<View style={styles.row1}>
					<FlatList
						showsVerticalScrollIndicator={false}
						data={chat.messages}
						keyExtractor={(item)=>item.id.toString()}
						renderItem={({item, index}) => (
							<ChatMessagesItem
								item={item}
							/>
						)}
						ItemSeparatorComponent={()=><View style={styles.itemsSeparator}/>}

					/>

				</View>
				<View style={styles.row2}>
					<TextInput
						placeholder='Type your message here..'
						style={styles.textInput}
					/>
					<TouchableOpacity>
						<Icon size={30} name='send' color='black' />
					</TouchableOpacity>
				</View>
				<View style={styles.row3}>
					<TouchableOpacity
						style={styles.iconButton}	
					>
						<Icon size={30} name='camera' color='black' />

					</TouchableOpacity>
					<TouchableOpacity
						style={styles.iconButton}	
					>
						<Icon size={30} name='share' color='black' />

					</TouchableOpacity>
					<TouchableOpacity
						style={styles.iconButton}	
					>
						<Icon size={30} name='camera' color='black' />

					</TouchableOpacity>
					<TouchableOpacity
						style={styles.iconButton}	
					>
						<Icon size={30} name='location' color='black' />

					</TouchableOpacity>
					<TouchableOpacity
						style={styles.iconButton}	
					>
						<Icon size={30} name='camera' color='black' />

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

export default connect(mapStateToProps, mapDispatchToProps)(ChatDetail)

const {width, height} = Dimensions.get('window');

//set screen styles
const styles = StyleSheet.create({
    container:{
        flex:1,
		backgroundColor:'white',
        paddingTop:20,
     
    },
	row1:{
		flex:1,
	},
	textInput:{
		flex:1,
	},
	row2:{
		flexDirection:'row',
		alignItems:'center',
		paddingHorizontal:20,
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
