import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import { connect } from 'react-redux'


class Set extends Component {

    _keyExtractor = (item, index) => "key" + index;

    _renderItem = ({ item, index }) => {
        return (
            <View>Sets</View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.sets}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListFooterComponent={<Text>New set</Text>}
                />
            </View>

        )
    }
}


const mapStateToProps = state => ({
    sets: state.Set
})

export default connect(mapStateToProps)(Set)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
});