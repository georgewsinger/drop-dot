goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__241931__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__241931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__241932__i = 0, G__241932__a = new Array(arguments.length -  0);
while (G__241932__i < G__241932__a.length) {G__241932__a[G__241932__i] = arguments[G__241932__i + 0]; ++G__241932__i;}
  args = new cljs.core.IndexedSeq(G__241932__a,0);
} 
return G__241931__delegate.call(this,args);};
G__241931.cljs$lang$maxFixedArity = 0;
G__241931.cljs$lang$applyTo = (function (arglist__241933){
var args = cljs.core.seq(arglist__241933);
return G__241931__delegate(args);
});
G__241931.cljs$core$IFn$_invoke$arity$variadic = G__241931__delegate;
return G__241931;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__241934__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__241934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__241935__i = 0, G__241935__a = new Array(arguments.length -  0);
while (G__241935__i < G__241935__a.length) {G__241935__a[G__241935__i] = arguments[G__241935__i + 0]; ++G__241935__i;}
  args = new cljs.core.IndexedSeq(G__241935__a,0);
} 
return G__241934__delegate.call(this,args);};
G__241934.cljs$lang$maxFixedArity = 0;
G__241934.cljs$lang$applyTo = (function (arglist__241936){
var args = cljs.core.seq(arglist__241936);
return G__241934__delegate(args);
});
G__241934.cljs$core$IFn$_invoke$arity$variadic = G__241934__delegate;
return G__241934;
})()
;

return null;
});
