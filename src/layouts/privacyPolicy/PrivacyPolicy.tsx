import React from 'react'
import { ScrollView, Dimensions, StyleSheet, StatusBar, View, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import PrivacyHeader from '../../components/privacyPolicy/PrivacyPolicyHeader'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../assets/colors/main';


type Prop = {
	navigation:any,
	route:any,

}

type State = {
	group:any,

}

class  PrivacyPolicy extends React.Component<Prop,State> { 

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
            <PrivacyHeader 
				title={'Delete'}
				firstAction={this.props.navigation.goBack}	
			/>
          ),
        });
    }

	componentDidMount(){
		// Set the component state 
		this._isMounted = true;
		this._customNav();
	}

 
    //components rending method
    render(){
		let group = this.state.group;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.main}/>
				<ScrollView contentContainerStyle={styles.row1}>
					<View style={styles.row1}>
						<Text style={styles.title}>A Chat - React Native Chat  & Messanger Template</Text>
						<Text style={styles.title}>- Privacy Policy</Text>
						<Text style={styles.header}>Privacy Policy</Text>
						<Text style={styles.paragraphe}>hophoet.com built the AChat app as a Free app. This SERVICE is provided by hophoet.com a no cost and is intended for use as is.</Text>
						<Text style={styles.paragraphe}>This page is used to inform visitors regaring my policies with th collection, use and disclosure of Personal Information if anyone decided to use my Service</Text>
						<Text style={styles.paragraphe}>If you choose to use my Service, the you agree to the collection and use of information in relation to this</Text>
						<Text style={styles.paragraphe}>This page is used to inform visitors regaring my policies with th collection, use and disclosure of Personal Information if anyone decided to use my Service</Text>
						<Text style={styles.paragraphe}>If you choose to use my Service, the you agree to the collection and use of information in relation to this</Text>
						<Text style={styles.paragraphe}>This page is used to inform visitors regaring my policies with th collection, use and disclosure of Personal Information if anyone decided to use my Service</Text>
						<Text style={styles.paragraphe}>If you choose to use my Service, the you agree to the collection and use of information in relation to this</Text>
					</View>

				</ScrollView>
				<View style={styles.row2}>
					<View style={styles.button1}>
						<Icon name='checkbox' color={colors.main} size={25}/>
						<Text style={styles.button1Label}>ACCEPT TERMS & CONDITIONS</Text>
					</View>
					<TouchableOpacity
						onPress={()=> {
							this.props.navigation.navigate('Main')
						}}
					
					style={styles.button2}>
						<Text style={styles.button2Label}>ACCEPT</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy)

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
	
	},
	title:{
		fontSize:35,
	},
	row2:{
		paddingVertical:20,
		flexDirection:'row',
		// backgroundColor:'red',
		alignItems:'center',
		justifyContent:'center',
	},
	header:{
		fontWeight:'bold',
	},
	paragraphe:{
		paddingVertical:10,
	},
	button1:{
		flexDirection:'row',
		alignItems:'center',
		flex:3,
	},
	button1Label:{
		fontSize:12,
		paddingHorizontal:10,
	},
	button2:{
		flex:1,
	},
	button2Label:{
		color:colors.main,
		fontWeight:'bold',
	}


})
