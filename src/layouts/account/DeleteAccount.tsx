import React from 'react'
import { Dimensions, StyleSheet, StatusBar, View, Text} from 'react-native'
import { connect } from 'react-redux'
import DeleteAccountHeader from '../../components/account/DeleteAccountHeader';
import CTextInput from '../../components/CTextInput';
import CButton from '../../components/CButton';
import { colors } from '../../assets/colors/main';


type Prop = {
	navigation:any,
	route:any,

}

type State = {
	group:any,

}

class  DeleteAccount extends React.Component<Prop,State> { 

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
            <DeleteAccountHeader 
				title={'Delete'}
				isOnline={true}
				firstAction={this.props.navigation.goBack}	
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
					<Text style={styles.title}>Confirm password for deleting your account and data</Text>
				</View>
				<View style={styles.row2}>
					<CTextInput
						placeholder='Password'
						textInputContainerStyle={{borderColor:'gray'}}
					/>
				</View>
				<View style={styles.row3}>
						<CButton 
							onPress={() => this.props.navigation.navigate('Auth')}	
							buttonStyle={{backgroundColor:'red'}}
							textStyle={{color:'white', fontWeight:'bold'}}
							label='DELETE ACCOUNT & DATA'
						/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount)

const {width, height} = Dimensions.get('window');

//set screen styles
const styles = StyleSheet.create({
    container:{
        flex:1,
		backgroundColor:'white',
        paddingTop:20,
		paddingHorizontal:20,
     
    },
	row1:{
		justifyContent:'center',
		paddingBottom:20,
	
	},
	title:{
		fontSize:20,
	},
	row2:{
		paddingBottom:20,
	},
	row3:{

	}

})
