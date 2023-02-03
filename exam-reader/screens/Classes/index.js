import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';


function ClassesScreen ( {navigation} ) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Classes</Text>
        </View>
      </SafeAreaView>
    );
};

export default ClassesScreen;