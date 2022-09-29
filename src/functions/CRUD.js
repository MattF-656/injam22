import { Amplify, API, graphqlOperation } from 'aws-amplify';
import {
  getUserStory,
  listUserStories,
  getUserLevel,
  listUserLevels,
} from './graphql/queries';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

async function fetchUserStory() {
  try {
    const myUserStoryData = await API.graphql(
      graphqlOperation(listUserStories)
    );
    const myUserStory = myUserStoryData.data.listUserStories.items;
    let get_id;
    for (let story in myUserStory) {
      if (
        myUserStory[story].user_story_id === formState.user_story_id
      ) {
        get_id = myUserStory[story].id;
      }
    }
    const singleStoryData = await API.graphql(
      graphqlOperation(getUserStory, { id: get_id })
    );
    const singleStory = singleStoryData.data.getUserStory;
    setUserStory(singleStory);
  } catch (err) {
    console.log(err);
  }
}

async function fetchUserLevel() {
  try {
    const myUserLevelData = await API.graphql(
      graphqlOperation(listUserLevels)
    );
    const myUserLevel = myUserLevelData.data.listUserLevels.items;
    let get_id;
    for (let user in myUserLevel) {
      if (myUserLevel[user].user_id === formState.user_id) {
        get_id = myUserLevel[user].id;
      }
    }
    const singleLevelData = await API.graphql(
      graphqlOperation(getUserLevel, { id: get_id })
    );
    const singleLevel = singleLevelData.data.getUserLevel;
    setUserLevel(singleLevel);
  } catch (err) {
    console.log(err);
  }
}

export default CRUD;
