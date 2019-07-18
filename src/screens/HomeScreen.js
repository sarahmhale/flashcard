import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import { connect } from 'react-redux'
import NewSet from '../components/NewSet'
import SetCard from '../containers/SetCard'
import Header from '../components/Header'



class HomeScreen extends Component {
    static navigationOptions = { header: null }

    _keyExtractor = (item, index) => "key" + index;

    _renderItem = () => {
        return (
            <View><SetCard /></View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={Object.keys(this.props.sets)}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListHeaderComponent={<Header />}
                    ListFooterComponent={<NewSet />}
                />
            </View>

        )
    }
}


const mapStateToProps = state => ({
    sets: state.Sets
})

export default connect(mapStateToProps)(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
});