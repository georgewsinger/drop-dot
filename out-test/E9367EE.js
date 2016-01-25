goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22143__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22144__i = 0, G__22144__a = new Array(arguments.length -  0);
while (G__22144__i < G__22144__a.length) {G__22144__a[G__22144__i] = arguments[G__22144__i + 0]; ++G__22144__i;}
  args = new cljs.core.IndexedSeq(G__22144__a,0);
} 
return G__22143__delegate.call(this,args);};
G__22143.cljs$lang$maxFixedArity = 0;
G__22143.cljs$lang$applyTo = (function (arglist__22145){
var args = cljs.core.seq(arglist__22145);
return G__22143__delegate(args);
});
G__22143.cljs$core$IFn$_invoke$arity$variadic = G__22143__delegate;
return G__22143;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22146__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22147__i = 0, G__22147__a = new Array(arguments.length -  0);
while (G__22147__i < G__22147__a.length) {G__22147__a[G__22147__i] = arguments[G__22147__i + 0]; ++G__22147__i;}
  args = new cljs.core.IndexedSeq(G__22147__a,0);
} 
return G__22146__delegate.call(this,args);};
G__22146.cljs$lang$maxFixedArity = 0;
G__22146.cljs$lang$applyTo = (function (arglist__22148){
var args = cljs.core.seq(arglist__22148);
return G__22146__delegate(args);
});
G__22146.cljs$core$IFn$_invoke$arity$variadic = G__22146__delegate;
return G__22146;
})()
;

return null;
});
