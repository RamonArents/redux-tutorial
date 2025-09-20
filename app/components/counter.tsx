
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "~/state/counter/counterSlice";
import type { RootState } from "~/state/store";

export function Counter() {
    const count = useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch();

    return <div>
        <h2>{count}</h2>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>incrementByAmount</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>
}