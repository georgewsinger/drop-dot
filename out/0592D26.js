goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__384683__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__384683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__384684__i = 0, G__384684__a = new Array(arguments.length -  0);
while (G__384684__i < G__384684__a.length) {G__384684__a[G__384684__i] = arguments[G__384684__i + 0]; ++G__384684__i;}
  args = new cljs.core.IndexedSeq(G__384684__a,0);
} 
return G__384683__delegate.call(this,args);};
G__384683.cljs$lang$maxFixedArity = 0;
G__384683.cljs$lang$applyTo = (function (arglist__384685){
var args = cljs.core.seq(arglist__384685);
return G__384683__delegate(args);
});
G__384683.cljs$core$IFn$_invoke$arity$variadic = G__384683__delegate;
return G__384683;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__384686__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__384686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__384687__i = 0, G__384687__a = new Array(arguments.length -  0);
while (G__384687__i < G__384687__a.length) {G__384687__a[G__384687__i] = arguments[G__384687__i + 0]; ++G__384687__i;}
  args = new cljs.core.IndexedSeq(G__384687__a,0);
} 
return G__384686__delegate.call(this,args);};
G__384686.cljs$lang$maxFixedArity = 0;
G__384686.cljs$lang$applyTo = (function (arglist__384688){
var args = cljs.core.seq(arglist__384688);
return G__384686__delegate(args);
});
G__384686.cljs$core$IFn$_invoke$arity$variadic = G__384686__delegate;
return G__384686;
})()
;

return null;
});
