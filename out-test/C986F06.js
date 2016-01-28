goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12450__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12451__i = 0, G__12451__a = new Array(arguments.length -  0);
while (G__12451__i < G__12451__a.length) {G__12451__a[G__12451__i] = arguments[G__12451__i + 0]; ++G__12451__i;}
  args = new cljs.core.IndexedSeq(G__12451__a,0);
} 
return G__12450__delegate.call(this,args);};
G__12450.cljs$lang$maxFixedArity = 0;
G__12450.cljs$lang$applyTo = (function (arglist__12452){
var args = cljs.core.seq(arglist__12452);
return G__12450__delegate(args);
});
G__12450.cljs$core$IFn$_invoke$arity$variadic = G__12450__delegate;
return G__12450;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12453__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12454__i = 0, G__12454__a = new Array(arguments.length -  0);
while (G__12454__i < G__12454__a.length) {G__12454__a[G__12454__i] = arguments[G__12454__i + 0]; ++G__12454__i;}
  args = new cljs.core.IndexedSeq(G__12454__a,0);
} 
return G__12453__delegate.call(this,args);};
G__12453.cljs$lang$maxFixedArity = 0;
G__12453.cljs$lang$applyTo = (function (arglist__12455){
var args = cljs.core.seq(arglist__12455);
return G__12453__delegate(args);
});
G__12453.cljs$core$IFn$_invoke$arity$variadic = G__12453__delegate;
return G__12453;
})()
;

return null;
});
