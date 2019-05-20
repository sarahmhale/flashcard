import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';

import { connect } from 'react-redux'
import Flashcard from '../components/Flashcard'
import InputField from '../components/InputField';
import AddFlashcard from '../components/AddFlashcard'



class CreateSet extends Component {
    _keyExtractor = (item, index) => 'key' + index;

    _renderItem = ({ item }) => (
        <Flashcard
            id={item.id}
        // onPressItem={this._onPressItem}
        //selected={!!this.state.selected.get(item.id)}
        // title={item.title}
        />
    );
    render() {
        return (
            <View style={styles.container}>


                <FlatList
                    data={this.props.cards}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListHeaderComponent={<InputField placeholder='Name of set' />}
                    ListFooterComponent={<AddFlashcard />}

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