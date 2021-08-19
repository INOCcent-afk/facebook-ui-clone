import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../utils/styles';
import ActiveBadge from './ActiveBadge';

type Props = {
  badge?: boolean;
  borderColor?: string;
  borderWidth?: number;
};

const UserDisplay: FC<Props> = ({
  badge = false,
  borderColor = colors.primaryBackground,
  borderWidth,
}: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.wrapper,
          {borderColor: borderColor, borderWidth: borderWidth},
        ]}>
        <Image style={styles.image} source={require('../assets/profile.jpg')} />
      </View>
      {badge ? <ActiveBadge bottom={0} right={0} /> : null}
    </View>
  );
};

export default UserDisplay;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
  },

  wrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
  },

  image: {
    width: 50,
    height: 50,
  },
});
