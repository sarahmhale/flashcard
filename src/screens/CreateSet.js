import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    KeyboardAvoidingView
} from 'react-native';

import { connect } from 'react-redux'
import Flashcard from '../containers/Flashcard'
import InputField from '../components/InputField';
import NewCard from '../components/Cards/NewCard'


class CreateSet extends Component {



    _keyExtractor = (item, index) => "key" + index;

    _renderItem = ({ item, index }) => {
        const { navigation } = this.props;
        const itemId = navigation.getParam('id', 'NO-ID');
        return (
            <Flashcard
                index={index}
                id={itemId}
                term={item.term}
                definition={item.definition}
            />
        );
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('id', 'NO-ID');

        return (
            <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
                <FlatList
                    data={this.props.sets[itemId]}
                    extraData={[this.state, itemId]}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListHeaderComponent={<InputField placeholder='Name of set' />}
                    ListFooterComponent={<NewCard id={itemId} />}
                />
            </KeyboardAvoidingView>

        )
    }
}


const mapStateToProps = state => ({
    sets: state.Sets
})

export default connect(mapStateToProps)(CreateSet)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
});