import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserData {
  name: string;
  scores: number;
  operation: string;
  maxFirstNum: number;
  maxSecondNum: number;
  duration: number;
}

interface UserState {
  data: UserData[];
  activeUserIndex: number | null;
}
const initialUserData: UserData = {
  name: "user",
  scores: 0,
  operation: "+",
  maxFirstNum: 100,
  maxSecondNum: 100,
  duration: 12,
};

const initialState: UserState = {
  data: [initialUserData],
  activeUserIndex: 0,
};

const getActiveIndex = (state: UserState) => {
  return state.activeUserIndex;
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      const userIndex = state.data.findIndex((user) => user.name === name);
      if (userIndex === -1) {
        state.data.push({
          name,
          scores: 0,
          operation: "+",
          maxFirstNum: 100,
          maxSecondNum: 100,
          duration: 9,
        });
        state.activeUserIndex = state.data.length - 1;
      } else {
        state.activeUserIndex = userIndex;
      }
    },
    changeMathData: (state, action) => {
      const activeIndex = getActiveIndex(state);
      if (activeIndex || activeIndex === 0) {
        const { operation, maxFirstNum, maxSecondNum, duration } =
          action.payload;
        state.data[activeIndex].operation = operation;
        state.data[activeIndex].maxFirstNum = maxFirstNum;
        state.data[activeIndex].maxSecondNum = maxSecondNum;
        state.data[activeIndex].duration = duration;
      }
    },

    setNewScores: (state, action) => {
      const activeIndex = getActiveIndex(state);
      if (activeIndex || activeIndex === 0) {
        state.data[activeIndex].scores = action.payload;
      }
    },
  },
});

export const { setActiveUser, changeMathData, setNewScores } =
  userDataSlice.actions;

export const getActiveUserName = (state: UserState) => {
  const activeIndex = getActiveIndex(state);
  if (activeIndex || activeIndex === 0) {
    return state.data[activeIndex].name;
  }
};

export const getUserData = (state: UserState) => {
  const activeIndex = getActiveIndex(state);
  if (activeIndex || activeIndex === 0) {
    return state.data[activeIndex];
  }
};

export default userDataSlice.reducer;
