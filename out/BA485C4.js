goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__159185__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__159185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159186__i = 0, G__159186__a = new Array(arguments.length -  0);
while (G__159186__i < G__159186__a.length) {G__159186__a[G__159186__i] = arguments[G__159186__i + 0]; ++G__159186__i;}
  args = new cljs.core.IndexedSeq(G__159186__a,0);
} 
return G__159185__delegate.call(this,args);};
G__159185.cljs$lang$maxFixedArity = 0;
G__159185.cljs$lang$applyTo = (function (arglist__159187){
var args = cljs.core.seq(arglist__159187);
return G__159185__delegate(args);
});
G__159185.cljs$core$IFn$_invoke$arity$variadic = G__159185__delegate;
return G__159185;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__159188__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__159188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159189__i = 0, G__159189__a = new Array(arguments.length -  0);
while (G__159189__i < G__159189__a.length) {G__159189__a[G__159189__i] = arguments[G__159189__i + 0]; ++G__159189__i;}
  args = new cljs.core.IndexedSeq(G__159189__a,0);
} 
return G__159188__delegate.call(this,args);};
G__159188.cljs$lang$maxFixedArity = 0;
G__159188.cljs$lang$applyTo = (function (arglist__159190){
var args = cljs.core.seq(arglist__159190);
return G__159188__delegate(args);
});
G__159188.cljs$core$IFn$_invoke$arity$variadic = G__159188__delegate;
return G__159188;
})()
;

return null;
});
