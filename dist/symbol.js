"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gensym = gensym;
var internedMap_536 = new Map();
var counter_537 = 0;
function gensym(name_540) {
  var prefix_541 = name_540 == null ? "s_" : name_540 + "_";
  var sym_542 = new Symbol_538(prefix_541 + counter_537);
  counter_537++;
  return sym_542;
}
function Symbol_538(name_543) {
  this.name = name_543;
}
Symbol_538.prototype.toString = function () {
  return this.name;
};
function makeSymbol_539(name_544) {
  if (internedMap_536.has(name_544)) {
    return internedMap_536.get(name_544);
  } else {
    var sym = new Symbol_538(name_544);
    internedMap_536.set(name_544, sym);
    return sym;
  }
}
exports.Symbol = makeSymbol_539;
exports.SymbolClass = Symbol_538;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N3ZWV0L3N5bWJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUVnQjtBQUZoQixJQUFJLGtCQUFrQixJQUFJLEdBQUosRUFBbEI7QUFDSixJQUFJLGNBQWMsQ0FBZDtBQUNHLFNBQVMsTUFBVCxDQUFnQixRQUFoQixFQUEwQjtBQUMvQixNQUFJLGFBQWEsWUFBWSxJQUFaLEdBQW1CLElBQW5CLEdBQTBCLFdBQVcsR0FBWCxDQURaO0FBRS9CLE1BQUksVUFBVSxJQUFJLFVBQUosQ0FBZSxhQUFhLFdBQWIsQ0FBekIsQ0FGMkI7QUFHL0IsZ0JBSCtCO0FBSS9CLFNBQU8sT0FBUCxDQUorQjtDQUExQjtBQU1QLFNBQVMsVUFBVCxDQUFvQixRQUFwQixFQUE4QjtBQUM1QixPQUFLLElBQUwsR0FBWSxRQUFaLENBRDRCO0NBQTlCO0FBR0EsV0FBVyxTQUFYLENBQXFCLFFBQXJCLEdBQWdDLFlBQVk7QUFDMUMsU0FBTyxLQUFLLElBQUwsQ0FEbUM7Q0FBWjtBQUdoQyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0M7QUFDaEMsTUFBSSxnQkFBZ0IsR0FBaEIsQ0FBb0IsUUFBcEIsQ0FBSixFQUFtQztBQUNqQyxXQUFPLGdCQUFnQixHQUFoQixDQUFvQixRQUFwQixDQUFQLENBRGlDO0dBQW5DLE1BRU87QUFDTCxRQUFJLE1BQU0sSUFBSSxVQUFKLENBQWUsUUFBZixDQUFOLENBREM7QUFFTCxvQkFBZ0IsR0FBaEIsQ0FBb0IsUUFBcEIsRUFBOEIsR0FBOUIsRUFGSztBQUdMLFdBQU8sR0FBUCxDQUhLO0dBRlA7Q0FERjtRQVMwQixTQUFsQjtRQUF3QyxjQUFkIiwiZmlsZSI6InN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBpbnRlcm5lZE1hcF81MzYgPSBuZXcgTWFwO1xubGV0IGNvdW50ZXJfNTM3ID0gMDtcbmV4cG9ydCBmdW5jdGlvbiBnZW5zeW0obmFtZV81NDApIHtcbiAgbGV0IHByZWZpeF81NDEgPSBuYW1lXzU0MCA9PSBudWxsID8gXCJzX1wiIDogbmFtZV81NDAgKyBcIl9cIjtcbiAgbGV0IHN5bV81NDIgPSBuZXcgU3ltYm9sXzUzOChwcmVmaXhfNTQxICsgY291bnRlcl81MzcpO1xuICBjb3VudGVyXzUzNysrO1xuICByZXR1cm4gc3ltXzU0Mjtcbn1cbmZ1bmN0aW9uIFN5bWJvbF81MzgobmFtZV81NDMpIHtcbiAgdGhpcy5uYW1lID0gbmFtZV81NDM7XG59XG5TeW1ib2xfNTM4LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubmFtZTtcbn07XG5mdW5jdGlvbiBtYWtlU3ltYm9sXzUzOShuYW1lXzU0NCkge1xuICBpZiAoaW50ZXJuZWRNYXBfNTM2LmhhcyhuYW1lXzU0NCkpIHtcbiAgICByZXR1cm4gaW50ZXJuZWRNYXBfNTM2LmdldChuYW1lXzU0NCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHN5bSA9IG5ldyBTeW1ib2xfNTM4KG5hbWVfNTQ0KTtcbiAgICBpbnRlcm5lZE1hcF81MzYuc2V0KG5hbWVfNTQ0LCBzeW0pO1xuICAgIHJldHVybiBzeW07XG4gIH1cbn1cbmV4cG9ydCB7bWFrZVN5bWJvbF81MzkgYXMgU3ltYm9sLCBTeW1ib2xfNTM4IGFzIFN5bWJvbENsYXNzfTtcbiJdfQ==