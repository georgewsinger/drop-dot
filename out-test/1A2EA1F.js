goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26989__i = 0, G__26989__a = new Array(arguments.length -  0);
while (G__26989__i < G__26989__a.length) {G__26989__a[G__26989__i] = arguments[G__26989__i + 0]; ++G__26989__i;}
  args = new cljs.core.IndexedSeq(G__26989__a,0);
} 
return G__26988__delegate.call(this,args);};
G__26988.cljs$lang$maxFixedArity = 0;
G__26988.cljs$lang$applyTo = (function (arglist__26990){
var args = cljs.core.seq(arglist__26990);
return G__26988__delegate(args);
});
G__26988.cljs$core$IFn$_invoke$arity$variadic = G__26988__delegate;
return G__26988;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26991__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26992__i = 0, G__26992__a = new Array(arguments.length -  0);
while (G__26992__i < G__26992__a.length) {G__26992__a[G__26992__i] = arguments[G__26992__i + 0]; ++G__26992__i;}
  args = new cljs.core.IndexedSeq(G__26992__a,0);
} 
return G__26991__delegate.call(this,args);};
G__26991.cljs$lang$maxFixedArity = 0;
G__26991.cljs$lang$applyTo = (function (arglist__26993){
var args = cljs.core.seq(arglist__26993);
return G__26991__delegate(args);
});
G__26991.cljs$core$IFn$_invoke$arity$variadic = G__26991__delegate;
return G__26991;
})()
;

return null;
});
