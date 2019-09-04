import { useState, useEffect } from 'react';
import firebase from '../firebase';

const useTasks = selectProject => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==');
  }, []);
};

export default useTasks;
