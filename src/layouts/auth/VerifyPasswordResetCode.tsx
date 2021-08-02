
import React, {useState} from 'react';
import {StatusBar, Text, View, StyleSheet, Dimensions} from 'react-native'
import AuthNavHeader from '../../components/AuthNavHeader';
import CButton from '../../components/CButton';
import CTextInput from '../../components/CTextInput';
import { colors } from '../../assets/colors/main'

const VerifyPasswordResetCode = ({navigation}:any) => {
  	const [termsAccepts, toggleTerms] = useState(false)

	const navigateToSignUp = ()=>{
		navigation.navigate('SignUp')
	}
	const navigateToResetPassword = ()=>{
		navigation.navigate('ResetPassword')
	}

	const navigateToHome = ()=>{
		navigation.navigate('App')
	}

	return(
		<View style={styles.container}>
			<StatusBar 
				hidden={false}
				backgroundColor={colors.main}
			/>
			<AuthNavHeader/>
			<View
				style={styles.contentContainer}
			>
				<View style={styles.row1}>
					<Text style={styles.row1Title}>Verify Forgot Password Code</Text>
				</View>
				<View style={styles.row2}>
					<View style={styles.textInputsContainer}>
						<View style={styles.textInputContainer}>
							<CTextInput
								textInputProps = {
				               		{keyboardType:'numeric'}
								}
								placeholder='Code'
							/>
						</View>
					</View>
					<CButton 
						buttonStyle={{backgroundColor:colors.main}}
						textStyle={{color:'white'}}
						onPress={() => navigation.navigate('SetNewPassword')}	
						iconPosition='right'
						label='verify'
					/>
					<View style={styles.formBottomContainer}>
						<CButton 
							buttonStyle={{backgroundColor:'white'}}
							textStyle={{color:'black', fontWeight:'bold'}}
							onPress={() => navigation.goBack()}	
							label='go back'
						/>
					</View>

				</View>
			</View>
		</View>
	)
}

export default VerifyPasswordResetCode;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white',
		//backgroundColor:'#6C63FF'
	},
	row1Title:{
		fontSize:20,
		fontWeight:'bold',
		color:'black',
		alignSelf:'center',
	},
	contentContainer:{
		flex:1,
		backgroundColor:'white',
		paddingHorizontal:20,
	},
	row1:{
		justifyContent:'center',
		margin:30,
	},
	row2:{
		flex:3,
	},
	textInputContainer:{
		paddingBottom:10,
	},
	
	button:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'red',
		padding:10,
		borderRadius:width/2,
		marginHorizontal:width/10,
	},
	formBottomContainer:{
		paddingVertical:10,
		justifyContent:'center'
		
	},
	formBottomFirstLabel:{
		color:'black',	
		fontWeight:'bold',
		textTransform:'uppercase',
	},
	formBottomFirstButton:{
		flexDirection:'row',
		alignItems:'center',
	
	},
	footerLabel:{
		color:'white',
	},
	footerLabelRight:{
		fontWeight:'bold',
		fontSize:15,
	},
	textInputsContainer:{
		paddingBottom:20,
}

})
