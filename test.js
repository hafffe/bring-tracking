import test from 'ava';
import m from '.';

test('bring', async t => {
	t.is(typeof await m('373400014506461747', {locale: 'en'}), 'object');
});
