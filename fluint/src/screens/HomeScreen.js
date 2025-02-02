import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Figtree_400Regular,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';
import { getImageUrl } from '../../util/utils';

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    Figtree_400Regular,
    Figtree_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image source={getImageUrl('pfp.png')} style={styles.profileImage} />
          <Text style={styles.greetingText}>Hello, Name</Text>
        </View>

        {/* Divider */}
        <View>
          <Image source={getImageUrl('div.png')} style={styles.div} />
        </View>

        {/* Flashcards Section */}
{/* Flashcards Section */}
<View style={{ position: 'relative' }}>
  <Text style={styles.sectionTitle}>Flashcards</Text>
  <View style={styles.flashcardContainer}>
    <View style={styles.flashcards}>
      <View style={styles.card}>
        <Image source={getImageUrl('flashcard.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Deck Title</Text>
        <Text style={styles.cardText}>Last Reviewed: ##</Text>
      </View>
      <View style={styles.card}>
        <Image source={getImageUrl('flashcard.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Deck Title</Text>
        <Text style={styles.cardText}>Last Reviewed: ##</Text>
      </View>
    </View>
  </View>
</View>


        {/* Audio Clips Section */}
        <View style={styles.audioClipContainer}>
          <Text style={styles.sectionTitle}>Audio Clips</Text>
          <View style={styles.audioClip}>
            <Image source={getImageUrl('headphone.png')} style={styles.audioIcon} />
            <Text style={styles.audioText}>Audio Title</Text>
          </View>
        </View>

        {/* Notes Section */}
        <View style={styles.notesContainer}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <View style={styles.notePreview}>
            <Text style={styles.noteText}>Page Preview</Text>
            <Text style={styles.noteTitle}>Note Title</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    padding: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  greetingText: {
    fontSize: 25,
    fontFamily: 'Figtree_700Bold',
    marginLeft: 32,
  },
  div: {
    alignContent: 'center',
    height: '40%',
    width: '80%',
    resizeMode: 'contain',
    marginLeft: 40,
    marginBottom: -16, // Negative margin to pull content closer
  },
  flashcardContainer: {
    backgroundColor: '#FFF7AA',
    borderRadius: 16,
    padding: 16,
    marginBottom: 40,
    marginTop: 8, // Small top margin for proper spacing
  },

  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Figtree_700Bold',
    position: 'absolute',
    top: -14, // Moves text above the container
    left: '50%',
    transform: [{ translateX: -50 }], // Center horizontally
    paddingHorizontal: 8,
    zIndex: 1,
  },
  flashcards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  cardText: {
    fontFamily: 'Figtree_400Regular',
  },
  audioClipContainer: {
    backgroundColor: '#FFCDB6',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  audioClip: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  audioIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  audioText: {
    fontSize: 16,
    fontFamily: 'Figtree_400Regular',
  },
  notesContainer: {
    backgroundColor: '#DDFFA9',
    borderRadius: 16,
    padding: 16,
  },
  notePreview: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  noteText: {
    fontFamily: 'Figtree_400Regular',
  },
  noteTitle: {
    fontSize: 16,
    marginTop: 8,
    fontFamily: 'Figtree_700Bold',
  },
});
