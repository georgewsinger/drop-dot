goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__310687__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__310687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__310688__i = 0, G__310688__a = new Array(arguments.length -  0);
while (G__310688__i < G__310688__a.length) {G__310688__a[G__310688__i] = arguments[G__310688__i + 0]; ++G__310688__i;}
  args = new cljs.core.IndexedSeq(G__310688__a,0);
} 
return G__310687__delegate.call(this,args);};
G__310687.cljs$lang$maxFixedArity = 0;
G__310687.cljs$lang$applyTo = (function (arglist__310689){
var args = cljs.core.seq(arglist__310689);
return G__310687__delegate(args);
});
G__310687.cljs$core$IFn$_invoke$arity$variadic = G__310687__delegate;
return G__310687;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__310690__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__310690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__310691__i = 0, G__310691__a = new Array(arguments.length -  0);
while (G__310691__i < G__310691__a.length) {G__310691__a[G__310691__i] = arguments[G__310691__i + 0]; ++G__310691__i;}
  args = new cljs.core.IndexedSeq(G__310691__a,0);
} 
return G__310690__delegate.call(this,args);};
G__310690.cljs$lang$maxFixedArity = 0;
G__310690.cljs$lang$applyTo = (function (arglist__310692){
var args = cljs.core.seq(arglist__310692);
return G__310690__delegate(args);
});
G__310690.cljs$core$IFn$_invoke$arity$variadic = G__310690__delegate;
return G__310690;
})()
;

return null;
});
