import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Images {
  url?: string;
  height?: number;
  width?: number;
}

interface UserInfo {
  display_name: string | undefined;
  country: string;
  email: string;
  href: string;
  id: string;
  product: string;
  type: string;
  uri: string;
  images?: Images[];
  followers?: {
    href: null | string;
    total: number;
  };
}

const initialState: UserInfo = {
  country: "",
  display_name: "",
  email: "",
  href: "",
  id: "",
  product: " ",
  type: "",
  uri: "",
  images: [],
  followers: {
    href: null,
    total: 0,
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.country = action.payload.country;
      state.href = action.payload.href;
      state.id = action.payload.id;
      state.uri = action.payload.uri;
      state.email = action.payload.email;
      state.product = action.payload.product;
      state.type = action.payload.product;
      state.display_name = action.payload.display_name;
    },
  },
});

export default UserSlice.reducer;
export const { setUser } = UserSlice.actions;
//
