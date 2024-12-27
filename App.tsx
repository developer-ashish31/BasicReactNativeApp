import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EAF0F1'
  }
})
