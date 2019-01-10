function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
describe('shout(string)', function() {
  ('receives one argument and returns it in all caps', function(){
    expect(shout('hello')).toEqual('HELLO')
  })
})
