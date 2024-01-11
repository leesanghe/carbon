import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { argonTheme } from '../constants';

import { Linking } from 'react-native';

class Card extends React.Component {
  handleCardPress = () => {
    const { item } = this.props;
    const link = item.link;

    if (link) {
      Linking.openURL(link);
    }
  };

  render() {
    const { item, horizontal, full, style, ctaColor } = this.props;

    const cardContainer = [styles.card, styles.shadow, style];
    const cardDescriptionContainer = [
      styles.cardDescription,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
    ];

    return (
      <TouchableWithoutFeedback onPress={this.handleCardPress}>
        <Block row={horizontal} card flex style={cardContainer}>
          <Block flex space="between" style={cardDescriptionContainer}>
            <Text size={14} style={styles.cardTitle}>
              {item.title}
            </Text>
            <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>
              {item.cta}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16,
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(Card);
