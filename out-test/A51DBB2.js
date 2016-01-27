goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__130357__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__130357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__130358__i = 0, G__130358__a = new Array(arguments.length -  0);
while (G__130358__i < G__130358__a.length) {G__130358__a[G__130358__i] = arguments[G__130358__i + 0]; ++G__130358__i;}
  args = new cljs.core.IndexedSeq(G__130358__a,0);
} 
return G__130357__delegate.call(this,args);};
G__130357.cljs$lang$maxFixedArity = 0;
G__130357.cljs$lang$applyTo = (function (arglist__130359){
var args = cljs.core.seq(arglist__130359);
return G__130357__delegate(args);
});
G__130357.cljs$core$IFn$_invoke$arity$variadic = G__130357__delegate;
return G__130357;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__130360__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__130360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__130361__i = 0, G__130361__a = new Array(arguments.length -  0);
while (G__130361__i < G__130361__a.length) {G__130361__a[G__130361__i] = arguments[G__130361__i + 0]; ++G__130361__i;}
  args = new cljs.core.IndexedSeq(G__130361__a,0);
} 
return G__130360__delegate.call(this,args);};
G__130360.cljs$lang$maxFixedArity = 0;
G__130360.cljs$lang$applyTo = (function (arglist__130362){
var args = cljs.core.seq(arglist__130362);
return G__130360__delegate(args);
});
G__130360.cljs$core$IFn$_invoke$arity$variadic = G__130360__delegate;
return G__130360;
})()
;

return null;
});
