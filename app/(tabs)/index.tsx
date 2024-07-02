import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Me.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Oluwatobiloba</ThemedText>
      </ThemedView>
      <ThemedText style={styles.leader}> Scrum Leader</ThemedText>
      <ThemedView style={styles.About}>Bio:</ThemedView>
      <ThemedView style={styles.text}>I love spending my free time playing games on my laptop. I like to play a fast-paced
            first-person shooter but I am not that good at it. Another type of game I like to play is strategy games. I
            always have a great time playing games and improving my gaming skills. I love playing gaming but I also
            enjoy playing soccer for fun. My chosen role for SCLA is Scrum Leader. I pick that because I like to lead people
            get them back on track. My dream career would be becoming my own boss. I would like to start a conpany some day!

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  
  reactLogo: {
    borderRadius: 220,
    maxWidth: 220,
    height: 220,
  },
  About: {
    height: 120,
    color: 'white',
    fontSize: 25,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },

});


