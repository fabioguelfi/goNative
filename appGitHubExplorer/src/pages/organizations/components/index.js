import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';

const OrganizationItem = () => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: OrganizationItem.avatar_url }} />
    <Text style={styles.title}>{organization.login}</Text>
  </View>
);

OrganizationItem.protoTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string
  })
}

export default OrganizationItem;