goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__116969__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__116969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__116970__i = 0, G__116970__a = new Array(arguments.length -  0);
while (G__116970__i < G__116970__a.length) {G__116970__a[G__116970__i] = arguments[G__116970__i + 0]; ++G__116970__i;}
  args = new cljs.core.IndexedSeq(G__116970__a,0);
} 
return G__116969__delegate.call(this,args);};
G__116969.cljs$lang$maxFixedArity = 0;
G__116969.cljs$lang$applyTo = (function (arglist__116971){
var args = cljs.core.seq(arglist__116971);
return G__116969__delegate(args);
});
G__116969.cljs$core$IFn$_invoke$arity$variadic = G__116969__delegate;
return G__116969;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__116972__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__116972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__116973__i = 0, G__116973__a = new Array(arguments.length -  0);
while (G__116973__i < G__116973__a.length) {G__116973__a[G__116973__i] = arguments[G__116973__i + 0]; ++G__116973__i;}
  args = new cljs.core.IndexedSeq(G__116973__a,0);
} 
return G__116972__delegate.call(this,args);};
G__116972.cljs$lang$maxFixedArity = 0;
G__116972.cljs$lang$applyTo = (function (arglist__116974){
var args = cljs.core.seq(arglist__116974);
return G__116972__delegate(args);
});
G__116972.cljs$core$IFn$_invoke$arity$variadic = G__116972__delegate;
return G__116972;
})()
;

return null;
});
