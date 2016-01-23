goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27770__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27771__i = 0, G__27771__a = new Array(arguments.length -  0);
while (G__27771__i < G__27771__a.length) {G__27771__a[G__27771__i] = arguments[G__27771__i + 0]; ++G__27771__i;}
  args = new cljs.core.IndexedSeq(G__27771__a,0);
} 
return G__27770__delegate.call(this,args);};
G__27770.cljs$lang$maxFixedArity = 0;
G__27770.cljs$lang$applyTo = (function (arglist__27772){
var args = cljs.core.seq(arglist__27772);
return G__27770__delegate(args);
});
G__27770.cljs$core$IFn$_invoke$arity$variadic = G__27770__delegate;
return G__27770;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27773__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27774__i = 0, G__27774__a = new Array(arguments.length -  0);
while (G__27774__i < G__27774__a.length) {G__27774__a[G__27774__i] = arguments[G__27774__i + 0]; ++G__27774__i;}
  args = new cljs.core.IndexedSeq(G__27774__a,0);
} 
return G__27773__delegate.call(this,args);};
G__27773.cljs$lang$maxFixedArity = 0;
G__27773.cljs$lang$applyTo = (function (arglist__27775){
var args = cljs.core.seq(arglist__27775);
return G__27773__delegate(args);
});
G__27773.cljs$core$IFn$_invoke$arity$variadic = G__27773__delegate;
return G__27773;
})()
;

return null;
});
