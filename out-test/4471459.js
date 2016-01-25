goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12358__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12359__i = 0, G__12359__a = new Array(arguments.length -  0);
while (G__12359__i < G__12359__a.length) {G__12359__a[G__12359__i] = arguments[G__12359__i + 0]; ++G__12359__i;}
  args = new cljs.core.IndexedSeq(G__12359__a,0);
} 
return G__12358__delegate.call(this,args);};
G__12358.cljs$lang$maxFixedArity = 0;
G__12358.cljs$lang$applyTo = (function (arglist__12360){
var args = cljs.core.seq(arglist__12360);
return G__12358__delegate(args);
});
G__12358.cljs$core$IFn$_invoke$arity$variadic = G__12358__delegate;
return G__12358;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12361__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12362__i = 0, G__12362__a = new Array(arguments.length -  0);
while (G__12362__i < G__12362__a.length) {G__12362__a[G__12362__i] = arguments[G__12362__i + 0]; ++G__12362__i;}
  args = new cljs.core.IndexedSeq(G__12362__a,0);
} 
return G__12361__delegate.call(this,args);};
G__12361.cljs$lang$maxFixedArity = 0;
G__12361.cljs$lang$applyTo = (function (arglist__12363){
var args = cljs.core.seq(arglist__12363);
return G__12361__delegate(args);
});
G__12361.cljs$core$IFn$_invoke$arity$variadic = G__12361__delegate;
return G__12361;
})()
;

return null;
});
