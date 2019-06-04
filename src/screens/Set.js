import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';


class CreateSet extends Component {

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
                    ListHeaderComponent={<InputField placeholder='Name of set' />}
                    ListFooterComponent={<NewCard />}
                />
            </View>

        )
    }
}


const mapStateToProps = state => ({
    sets: state.Set
})

export default connect(mapStateToProps)(CreateSet)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
});