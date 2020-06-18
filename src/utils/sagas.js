import { registerWatcher } from '../container/actions/actionCreators';

export default function* rootSaga() {
    yield [
        registerWatcher()
    ]
}
