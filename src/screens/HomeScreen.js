import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux'
import NewSet from '../components/Cards/NewSet'
import SetCard from '../components/Cards/SetCard'
import Header from '../components/Headers/Header'
import { COLORS } from '../themes';



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
            <View>
                <Header />
                <View style={styles.container}>
                    <FlatList
                        data={Object.keys(this.props.sets)}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        ListFooterComponent={<NewSet />}
                    />
                </View>
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
        marginTop: 24,
        borderRadius: 30,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.primary
    },
});