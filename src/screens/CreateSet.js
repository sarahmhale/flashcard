import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import { connect } from 'react-redux'
import Flashcard from '../containers/Flashcard'
import InputField from '../components/InputField';
import NewCard from '../components/NewCard'

class CreateSet extends Component {

    _keyExtractor = (item, index) => "key" + index;

    _renderItem = ({ item, index }) => {
        return (
            <Flashcard
                index={index}
                term={item.term}
                definition={item.definition}
            />
        );
    }

    render() {
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <FlatList
                    data={this.props.cards}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListHeaderComponent={<InputField placeholder='Name of set' />}
                    ListFooterComponent={<NewCard />}
                />
            </KeyboardAwareScrollView>

        )
    }
}


const mapStateToProps = state => ({
    cards: state.Card
})

export default connect(mapStateToProps)(CreateSet)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
});