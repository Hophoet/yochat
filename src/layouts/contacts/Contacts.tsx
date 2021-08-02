import React from 'react'
import { Dimensions, FlatList, StyleSheet, StatusBar, View} from 'react-native'
import { connect } from 'react-redux'
import ContactsHeader from '../../components/contacts/ContactsHeader'
import ContactsItem from '../../components/contacts/ContactsItem'
import {contacts} from '../../data/data'


type Prop = {
	navigation:any,

}

type State = {

}

class  Contacts extends React.Component<Prop,State> { 

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
            <ContactsHeader 
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
	}

 
    //components rending method
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'black'}/>
				<View style={styles.row1}>
					<FlatList
						showsVerticalScrollIndicator={false}
						data={contacts}
						keyExtractor={(item)=>item.id.toString()}
						renderItem={({item, index}) => (
							<ContactsItem
								item={item}
								navigate={this.props.navigation.navigate}
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

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)

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
