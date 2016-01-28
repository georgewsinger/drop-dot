goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24235__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24236__i = 0, G__24236__a = new Array(arguments.length -  0);
while (G__24236__i < G__24236__a.length) {G__24236__a[G__24236__i] = arguments[G__24236__i + 0]; ++G__24236__i;}
  args = new cljs.core.IndexedSeq(G__24236__a,0);
} 
return G__24235__delegate.call(this,args);};
G__24235.cljs$lang$maxFixedArity = 0;
G__24235.cljs$lang$applyTo = (function (arglist__24237){
var args = cljs.core.seq(arglist__24237);
return G__24235__delegate(args);
});
G__24235.cljs$core$IFn$_invoke$arity$variadic = G__24235__delegate;
return G__24235;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24238__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24239__i = 0, G__24239__a = new Array(arguments.length -  0);
while (G__24239__i < G__24239__a.length) {G__24239__a[G__24239__i] = arguments[G__24239__i + 0]; ++G__24239__i;}
  args = new cljs.core.IndexedSeq(G__24239__a,0);
} 
return G__24238__delegate.call(this,args);};
G__24238.cljs$lang$maxFixedArity = 0;
G__24238.cljs$lang$applyTo = (function (arglist__24240){
var args = cljs.core.seq(arglist__24240);
return G__24238__delegate(args);
});
G__24238.cljs$core$IFn$_invoke$arity$variadic = G__24238__delegate;
return G__24238;
})()
;

return null;
});
