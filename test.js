import test from 'ava';
import fn from './';

test('bring', async t => {
	t.is(typeof await fn('373400014506461747'), 'object');
});
