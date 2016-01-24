goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62469__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62470__i = 0, G__62470__a = new Array(arguments.length -  0);
while (G__62470__i < G__62470__a.length) {G__62470__a[G__62470__i] = arguments[G__62470__i + 0]; ++G__62470__i;}
  args = new cljs.core.IndexedSeq(G__62470__a,0);
} 
return G__62469__delegate.call(this,args);};
G__62469.cljs$lang$maxFixedArity = 0;
G__62469.cljs$lang$applyTo = (function (arglist__62471){
var args = cljs.core.seq(arglist__62471);
return G__62469__delegate(args);
});
G__62469.cljs$core$IFn$_invoke$arity$variadic = G__62469__delegate;
return G__62469;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62472__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62473__i = 0, G__62473__a = new Array(arguments.length -  0);
while (G__62473__i < G__62473__a.length) {G__62473__a[G__62473__i] = arguments[G__62473__i + 0]; ++G__62473__i;}
  args = new cljs.core.IndexedSeq(G__62473__a,0);
} 
return G__62472__delegate.call(this,args);};
G__62472.cljs$lang$maxFixedArity = 0;
G__62472.cljs$lang$applyTo = (function (arglist__62474){
var args = cljs.core.seq(arglist__62474);
return G__62472__delegate(args);
});
G__62472.cljs$core$IFn$_invoke$arity$variadic = G__62472__delegate;
return G__62472;
})()
;

return null;
});
