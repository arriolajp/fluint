import { StyleSheet, SafeAreaView, ScrollView, Text, View, ActivityIndicator, TextInput, FlatList, TouchableOpacity, Image, Pressable } from 'react-native';
import {getImageUrl} from './util/utils'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView alwaysBounceHorizontal={false} alwaysBounceVertical={false}>
{/*profile*/}
                <View>
                    <Image source= {getImageUrl('pfp.webp')}/>
                    <Text>hello, name</Text>
                </View>
{/*flashcards*/}
                <View>
                    <Text>flashcards</Text>
                    <View>
                        <Image source= {getImageUrl('flashcard.png')}/>
                        <Text>deck title</Text>
                        <Text>last reviewed: ## </Text>
                    </View>
                    <View>
                        <Image source= {getImageUrl('flashcard.png')}/>
                        <Text>deck title</Text>
                        <Text>last reviewed: ## </Text>
                    </View>
                </View>
{/*audioclip*/}
                <View>
                    <Text>audio clips</Text>
                    <View>
                        <Image source= {getImageUrl('headphone.jpg')}/>
                        <Image source= {getImageUrl('song-bar.jpg')}/>
                        <Text>audio title</Text>
                    </View>
                </View>
{/*notes*/}
                <View>
                    <Text>notes</Text>
                    <View>
                        <View>
                            <Text>page preview</Text>
                        </View>
                        <Text>note title</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default HomeScreen;