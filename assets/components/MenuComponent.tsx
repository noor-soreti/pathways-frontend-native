import React from 'react'
import { StyleSheet, Text } from 'react-native'
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements';
import { Button } from '@rneui/base';




export default function MenuComponent() {
    return (
        <ActionButton verticalOrientation='down' buttonColor='#e35434'>
            <ActionButton.Item buttonColor='#9b59b6' title="Maps" onPress={() => console.log("notes tapped!")}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Settings" onPress={() => { }}>
                <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="Profile" onPress={() => { }}>
                <Icon name="md-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton>
    )
}
const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});