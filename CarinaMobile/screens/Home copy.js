import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Block, theme } from 'galio-framework';
import axios from 'axios';

import Card from '../components/Card';

const { width } = Dimensions.get('screen');

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://192.168.0.29:8080/cbs/app/news'); // 가상의 API 엔드포인트
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const renderArticles = () => {
    if (loading) {
      return <ActivityIndicator size="large" color={theme.COLORS.ACTIVE} />;
    }

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Block flex row>
            {articles.slice(0, 2).map((article) => (
              <Card key={article.id} item={article} style={{ marginRight: theme.SIZES.BASE }} />
            ))}
          </Block>
          <Block flex row>
            {articles.slice(2, 4).map((article) => (
              <Card key={article.id} item={article} style={{ marginRight: theme.SIZES.BASE }} />
            ))}
          </Block>
          <Block flex row>
            {articles.slice(4, 6).map((article) => (
              <Card key={article.id} item={article} style={{ marginRight: theme.SIZES.BASE }} />
            ))}
          </Block>
        </Block>
      </ScrollView>
    );
  };

  return (
    <Block flex center style={styles.home}>
      {renderArticles()}
    </Block>
  );
};

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
