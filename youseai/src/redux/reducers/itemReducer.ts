// In your Redux slice file (e.g., profileSlice.ts)

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileFormData {
    username: string;
    systemPrompt: string;
}

interface ProfileState {
    data: ProfileFormData[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProfileState = {
    data: null,
    loading: false,
    error: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfileRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        updateProfileSuccess: (state, action: PayloadAction<ProfileFormData>) => {
            state.loading = false;
            state.data?.push(action.payload);
            state.error = null;
        },
        updateProfileFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { updateProfileRequest, updateProfileSuccess, updateProfileFailure } = profileSlice.actions;
export default profileSlice.reducer;
