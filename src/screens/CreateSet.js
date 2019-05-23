import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Keyboard,
} from 'react-native';


import { connect } from 'react-redux'
import Flashcard from '../containers/Flashcard'
import InputField from '../components/InputField';
import NewCard from '../components/NewCard'


class CreateSet extends Component {

    // componentDidMount() {
    //     this.keyboardDidShowListener = Keyboard.addListener(
    //         'keyboardDidShow',
    //         this._keyboardDidShow,
    //     );
    //     this.keyboardDidHideListener = Keyboard.addListener(
    //         'keyboardDidHide',
    //         this._keyboardDidHide,
    //     );
    // }

    // componentWillUnmount() {
    //     this.keyboardDidShowListener.remove();
    //     this.keyboardDidHideListener.remove();
    // }

    // _keyboardDidShow = (event) => {
    //     console.log("show")
    // }
    // _keyboardDidHide = () => {
    //     console.log("hide")
    // }

    _keyExtractor = (item, index) => "key" + index;

    _renderItem = ({ index }) => {
        return (
            <Flashcard
                index={index}
            />
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.cards}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListHeaderComponent={<InputField placeholder='Name of set' />}
                    ListFooterComponent={<NewCard />}
                />
            </View>
        )
    }
}


const mapStateToProps = state => ({
    cards: state.Card
})

export default connect(mapStateToProps)(CreateSet)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff'
    },
});