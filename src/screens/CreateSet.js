import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    KeyboardAvoidingView,
    Text,
    View
} from 'react-native';

import { connect } from 'react-redux'
import Flashcard from '../containers/Flashcard'
import NewCard from '../components/Cards/NewCard'
import CardHeader from '../components/Headers/CardHeader'
import { COLORS } from '../themes'

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
            <KeyboardAvoidingView behavior={'padding'}>
                <CardHeader />
                <View style={styles.container}>
                    <FlatList
                        data={this.props.sets[itemId]}
                        extraData={[this.state, itemId]}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        ListFooterComponent={<NewCard id={itemId} />}
                    />
                </View>
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
        borderRadius: 30,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.primary
    },
});