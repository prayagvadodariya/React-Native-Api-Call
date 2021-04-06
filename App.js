import { StatusBar } from 'expo-status-bar';
import React,  {Component}  from 'react';
import Router from './Router';
import { ToastProvider } from 'react-native-fast-toast';
export default function App() {
  
    return (
      <ToastProvider>
      <Router/>
      </ToastProvider>
    );
  }

    


