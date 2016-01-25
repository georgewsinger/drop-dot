goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26521__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26522__i = 0, G__26522__a = new Array(arguments.length -  0);
while (G__26522__i < G__26522__a.length) {G__26522__a[G__26522__i] = arguments[G__26522__i + 0]; ++G__26522__i;}
  args = new cljs.core.IndexedSeq(G__26522__a,0);
} 
return G__26521__delegate.call(this,args);};
G__26521.cljs$lang$maxFixedArity = 0;
G__26521.cljs$lang$applyTo = (function (arglist__26523){
var args = cljs.core.seq(arglist__26523);
return G__26521__delegate(args);
});
G__26521.cljs$core$IFn$_invoke$arity$variadic = G__26521__delegate;
return G__26521;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26524__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26525__i = 0, G__26525__a = new Array(arguments.length -  0);
while (G__26525__i < G__26525__a.length) {G__26525__a[G__26525__i] = arguments[G__26525__i + 0]; ++G__26525__i;}
  args = new cljs.core.IndexedSeq(G__26525__a,0);
} 
return G__26524__delegate.call(this,args);};
G__26524.cljs$lang$maxFixedArity = 0;
G__26524.cljs$lang$applyTo = (function (arglist__26526){
var args = cljs.core.seq(arglist__26526);
return G__26524__delegate(args);
});
G__26524.cljs$core$IFn$_invoke$arity$variadic = G__26524__delegate;
return G__26524;
})()
;

return null;
});
