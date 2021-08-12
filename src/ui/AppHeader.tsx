import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link} from '@react-navigation/native';

import {boldText, colors} from '../utils/styles';
import MessageIcon from '../icons/MessageIcon';
import SearchIcon from '../icons/SearchIcon';

const AppHeader: FC = () => {
  return (
    <View style={styles.container}>
      <Link to={{screen: 'SearchScreen'}}>
        <Text style={[boldText, styles.logo]}>facebook</Text>
      </Link>
      <View style={styles.externalScreens}>
        <View>
          <SearchIcon />
        </View>
        <View style={styles.messengerIcon}>
          <MessageIcon />
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBackground,
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  externalScreens: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  messengerIcon: {
    marginLeft: 15,
  },

  logo: {
    fontSize: 35,
  },
});
