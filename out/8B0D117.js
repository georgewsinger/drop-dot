goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63777__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63778__i = 0, G__63778__a = new Array(arguments.length -  0);
while (G__63778__i < G__63778__a.length) {G__63778__a[G__63778__i] = arguments[G__63778__i + 0]; ++G__63778__i;}
  args = new cljs.core.IndexedSeq(G__63778__a,0);
} 
return G__63777__delegate.call(this,args);};
G__63777.cljs$lang$maxFixedArity = 0;
G__63777.cljs$lang$applyTo = (function (arglist__63779){
var args = cljs.core.seq(arglist__63779);
return G__63777__delegate(args);
});
G__63777.cljs$core$IFn$_invoke$arity$variadic = G__63777__delegate;
return G__63777;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63780__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63781__i = 0, G__63781__a = new Array(arguments.length -  0);
while (G__63781__i < G__63781__a.length) {G__63781__a[G__63781__i] = arguments[G__63781__i + 0]; ++G__63781__i;}
  args = new cljs.core.IndexedSeq(G__63781__a,0);
} 
return G__63780__delegate.call(this,args);};
G__63780.cljs$lang$maxFixedArity = 0;
G__63780.cljs$lang$applyTo = (function (arglist__63782){
var args = cljs.core.seq(arglist__63782);
return G__63780__delegate(args);
});
G__63780.cljs$core$IFn$_invoke$arity$variadic = G__63780__delegate;
return G__63780;
})()
;

return null;
});
