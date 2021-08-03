import React from 'react'
import { Dimensions, FlatList, StyleSheet, StatusBar, View} from 'react-native'
import { connect } from 'react-redux'
import NotificationHeader from '../../components/notifications/NotificationsHeader'
import NotificationsItem from '../../components/notifications/NotificationsItem'
import {notifications} from '../../data/data'


type Prop = {
	navigation:any,

}

type State = {

}

class  Notifications extends React.Component<Prop,State> { 

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
            <NotificationHeader 
				// firstAction={this.closeAuth}	
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
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'black'}/>
				<View style={styles.row1}>
					<FlatList
						showsVerticalScrollIndicator={false}
						data={notifications}
						keyExtractor={(item)=>item.id.toString()}
						renderItem={({item, index}) => (
							<NotificationsItem
								item={item}
							/>
						)}
						ItemSeparatorComponent={()=><View style={styles.itemsSeparator}/>}

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

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)

const {width, height} = Dimensions.get('window');

//set screen styles
const styles = StyleSheet.create({
    container:{
        flex:1,
		backgroundColor:'white',
        paddingHorizontal:20,
        paddingTop:20,
     
    },
	row1:{
		flex:1,
	},
	itemsSeparator:{
		paddingVertical:10,
	}

})
