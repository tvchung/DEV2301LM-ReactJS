import { createStore } from "redux";
import reducer from "../reducers";

// tạo store từ reducer
export const store = createStore(reducer);