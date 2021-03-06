goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__356718__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__356718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__356719__i = 0, G__356719__a = new Array(arguments.length -  0);
while (G__356719__i < G__356719__a.length) {G__356719__a[G__356719__i] = arguments[G__356719__i + 0]; ++G__356719__i;}
  args = new cljs.core.IndexedSeq(G__356719__a,0);
} 
return G__356718__delegate.call(this,args);};
G__356718.cljs$lang$maxFixedArity = 0;
G__356718.cljs$lang$applyTo = (function (arglist__356720){
var args = cljs.core.seq(arglist__356720);
return G__356718__delegate(args);
});
G__356718.cljs$core$IFn$_invoke$arity$variadic = G__356718__delegate;
return G__356718;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__356721__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__356721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__356722__i = 0, G__356722__a = new Array(arguments.length -  0);
while (G__356722__i < G__356722__a.length) {G__356722__a[G__356722__i] = arguments[G__356722__i + 0]; ++G__356722__i;}
  args = new cljs.core.IndexedSeq(G__356722__a,0);
} 
return G__356721__delegate.call(this,args);};
G__356721.cljs$lang$maxFixedArity = 0;
G__356721.cljs$lang$applyTo = (function (arglist__356723){
var args = cljs.core.seq(arglist__356723);
return G__356721__delegate(args);
});
G__356721.cljs$core$IFn$_invoke$arity$variadic = G__356721__delegate;
return G__356721;
})()
;

return null;
});
