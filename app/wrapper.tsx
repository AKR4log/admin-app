'use client';

import { persistor, store } from "@/lib/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};
